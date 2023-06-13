import { User } from "../entities/user.entity";
import { AppDataSource } from "../config/databaseConfig";
import { UserInput } from "../validator/user.validator";

class UserService {
  constructor(
    private readonly userRepository = AppDataSource.getRepository(User)
  ) {}

  async createUser(data: UserInput) {
    const user = this.userRepository.create({
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    });
    return await user.save();
  }
}

export default new UserService();
