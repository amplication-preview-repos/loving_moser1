import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const QuizCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="questions" multiline source="questions" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
