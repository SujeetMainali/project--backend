import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserSchema {
  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  password: string;
}
