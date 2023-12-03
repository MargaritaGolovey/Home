import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

//price 1 item = 5грн
//count +1
//total sum = price*count

const Forms = () => {
  const form = useSelector((state) => state.form.form);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: { first_name: "", last_name: "", age: "", isMarried: false },
  });
  const onSubmit = (data) => console.log(data);
  console.log(isDirty, dirtyFields);
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
