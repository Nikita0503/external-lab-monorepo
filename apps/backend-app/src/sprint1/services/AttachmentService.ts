import { Attachment } from "../../models/models";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import ApiError from "../../errors/ApiError";

class AttachmentService {
    async attachAttachment(file: File, ids: string[]){
        const addedFileData = await this.saveFile(file); 
        const attatchmentInfo = await Attachment.create({name: addedFileData.fileName, ...ids})
        return attatchmentInfo.name;
    }

    async saveFile(file: File){
        const fileName = uuidv4() + '.jpg';
        const filePath = path.resolve('static', fileName);
        await fs.promises.writeFile(filePath, (file as any).buffer);
        return {fileName};
    }

    async detachAttachment(attachmentId: string){
        const atttachment = await Attachment.findOne({where: {id: attachmentId}});
        if(!atttachment){
            throw ApiError.badRequest(`Attachment with id '${attachmentId}' not found`);
        }
        this.deleteFile(atttachment.name);
        const deletedAttachmentId = Attachment.destroy({where: {id: attachmentId}});
        return !!deletedAttachmentId;
    }

    async deleteFile(attachmentName: string){
        try {
            const filePath = path.resolve('static', attachmentName);
            fs.unlinkSync(filePath);
        }catch(e){
            console.log("Delete attachment error: ", e)
        }
    }
}

export default new AttachmentService();