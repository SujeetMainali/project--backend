import { UserInput } from "../validator/user.validator";
import { UserSchema } from "../schema/user.schema";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import userService from "../service/user.service";

@Resolver()
export class UserResolver {
  @Mutation(() => UserSchema)
  async createUser(@Arg("data") data: UserInput) {
    const user = await userService.createUser(data);
  }

  @Query(()=>[UserSchema])
  async getUsers(){
    return await userService.getUsers()
  }
}
