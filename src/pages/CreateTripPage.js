import React from "react";
import { Input, FormControl, Center, Button } from "@chakra-ui/react";
import useProtectedPage from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";

function CreateTrip() {
  const [name, onChangeName] = useForm();
  const [planet, onChangePlanet] = useForm();
  const [date, onChangeDate] = useForm();
  const [description, onChangeDescription] = useForm();
  const [durationInDays, onChangeDurationInDays] = useForm();
  useProtectedPage();

  return (
    <Center m="10px">
      <FormControl
        as="form"
        w="40%"
        isRequired
        errorBorderColor="red"
        // onSubmit={onSubmit}
      >
        <Input
          id="name"
          value={name}
          onChange={onChangeName}
          placeholder="Trip name"
          type="text"
        />
        <Input
          id="planet"
          value={planet}
          onChange={onChangePlanet}
          placeholder="Planet"
          type="text"
        />
        <Input
          id="date"
          value={date}
          onChange={onChangeDate}
          placeholder="Date"
          type="text"
        />
        <Input
          id="description"
          value={description}
          onChange={onChangeDescription}
          placeholder="Description"
          type="text"
        />
        <Input
          id="duration"
          value={durationInDays}
          onChange={onChangeDurationInDays}
          placeholder="Duration in days"
          type="number"
        />
        <Button type="submit">Create</Button>
      </FormControl>
    </Center>
  );
}

export default CreateTrip;
