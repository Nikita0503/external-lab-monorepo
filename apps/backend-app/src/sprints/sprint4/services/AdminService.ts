import { User } from "../../../models/models";

class AdminService {
  async getAllUsersAndTheirTasks() {
    const users = await User.findAll({
      attributes: ["email", "name", "avatar"],
      include: [
        {
          association: "tasks",
          attributes: ["id", "title", "description", "done"],
          include: [
            {
              association: "files",
              attributes: ["id", "image"],
            },
          ],
        },
      ],
    });

    return users.map((user: any) => ({
      user: {
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
      tasks:
        user.tasks?.map((task: any) => ({
          id: task.id,
          title: task.title,
          description: task.description,
          done: task.done,
          files:
            task.files?.map((file: any) => ({
              id: file.id,
              image: file.image,
            })) || [],
        })) || [],
    }));
  }

  async deleteAllUsersAndTheirTasks() {
    await User.destroy({ where: {} });
    return true;
  }
}

export default new AdminService();
