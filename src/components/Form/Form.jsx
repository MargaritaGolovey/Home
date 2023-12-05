import { useForm, useFormContext, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../features/form/form";
import { useEffect, useState } from "react";

//price 1 item = 5грн
//count +1
//total sum = price*count

const Forms = () => {
  const form = useSelector((state) => state.form.form);
  console.log(form);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      first_name: form.first_name,
      last_name: form.last_name,
      age: form.age,
      isMarried: form.isMarried,
    },
  });

  const itemWatch = watch();

  const onSubmit = (data) => dispatch(updateForm(data));
  // console.log(isDirty, dirtyFields);

  useEffect(() => {
    dispatch(
      updateForm({
        first_name: itemWatch.first_name,
        last_name: itemWatch.last_name,
        age: itemWatch.age,
      })
    );
  }, [itemWatch.first_name, itemWatch.last_name, itemWatch.age]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          gap: 16,
        }}
      >
        <input
          name="first_name"
          type="text"
          placeholder="first_name"
          {...register("first_name", {
            required: {
              value: true,
              message: "Please fill field",
            },
            maxLength: {
              value: 6,
              message: "Please make ur name shorter",
            },
          })}
        />
        {errors.first_name && (
          <p style={{ color: "red" }}>{errors.first_name.message}</p>
        )}
        <input
          type="text"
          placeholder="last_name"
          {...register("last_name", { required: true, maxLength: 6 })}
        />
        <input
          type="number"
          placeholder="age"
          {...register("age", { required: true, maxLength: 3 })}
        />
        <input
          type="checkbox"
          placeholder="isMarried"
          {...register("isMarried", {})}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Forms;
