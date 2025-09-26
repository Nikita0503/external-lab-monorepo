import { UploadedFile } from "express-fileupload";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { File } from "../../../models/models";

class FileService {
  async attachFile(file: UploadedFile, ids: any) {
    const savedFileData = await this.saveFile(file);
    const fileInfo = await File.create({
      image: savedFileData.fileName,
      ...ids,
    });
    return fileInfo.name;
  }

  async saveFile(file: UploadedFile) {
    const fileName = uuidv4() + ".jpg";
    const filePath = path.resolve("static", fileName);
    await file.mv(filePath);
    return { fileName };
  }

  async detachFile(fileId: string) {
    const file = await File.findOne({
      where: { id: fileId },
    });
    this.deleteFile(file.name);
    const deletedFileId = File.destroy({
      where: { id: fileId },
    });
    return !!deletedFileId;
  }

  async deleteFile(fileName: string) {
    try {
      const filePath = path.resolve("static", fileName);
      fs.unlinkSync(filePath);
    } catch (e) {
      console.log("🔴 Delete file error: ", e);
    }
  }
}

export default new FileService();
