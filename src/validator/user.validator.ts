import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field(() => String)
  @IsString()
  firstName: string;

  @Field(() => String)
  @IsString()
  email: string;

  @Field(() => String)
  @IsString()
  password: string;
}
