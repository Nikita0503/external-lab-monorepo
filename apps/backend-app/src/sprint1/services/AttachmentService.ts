import { UploadedFile } from "express-fileupload";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import ApiError from "../../errors/ApiError";
import { Attachment } from "../../models/models";

class AttachmentService {
  async attachAttachment(file: UploadedFile, ids: string[]) {
    const savedFileData = await this.saveFile(file);
    const attatchmentInfo = await Attachment.create({
      name: savedFileData.fileName,
      ...ids,
    });
    return attatchmentInfo.name;
  }

  async saveFile(file: UploadedFile) {
    const fileName = uuidv4() + ".jpg";
    const filePath = path.resolve("static", fileName);
    await file.mv(filePath);
    return { fileName };
  }

  async detachAttachment(attachmentId: string) {
    const atttachment = await Attachment.findOne({
      where: { id: attachmentId },
    });
    if (!atttachment) {
      throw ApiError.badRequest("Invalid data", [
        `Attachment with id '${attachmentId}' not found`,
      ]);
    }
    this.deleteFile(atttachment.name);
    const deletedAttachmentId = Attachment.destroy({
      where: { id: attachmentId },
    });
    return !!deletedAttachmentId;
  }

  async deleteFile(attachmentName: string) {
    try {
      const filePath = path.resolve("static", attachmentName);
      fs.unlinkSync(filePath);
    } catch (e) {
      console.log("Delete attachment error: ", e);
    }
  }
}

export default new AttachmentService();
