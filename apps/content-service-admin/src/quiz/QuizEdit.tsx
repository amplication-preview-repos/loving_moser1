import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const QuizEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="questions" multiline source="questions" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
