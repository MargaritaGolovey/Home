import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../features/form/form";

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
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      first_name: form.first_name,
      last_name: form.last_name,
      age: form.age,
      isMarried: form.isMarried,
    },
  });
  const onSubmit = (data) => dispatch(updateForm(data));
  // console.log(isDirty, dirtyFields);
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
          onChange={(e)=>dispatch(updateForm({first_name:e.target.value}))}
        />
        {errors.first_name && (
          <p style={{ color: "red" }}>{errors.first_name.message}</p>
        )}
        <input
          type="text"
          placeholder="last_name"
          {...register("last_name", { required: true, maxLength: 6 })}
          onChange={(e)=>dispatch(updateForm({last_name:e.target.value}))}
        />
        <input
          type="number"
          placeholder="age"
          {...register("age", { required: true, maxLength: 3 })}
          onChange={(e)=>dispatch(updateForm({age:e.target.value}))}
        />
        <input
          type="checkbox"
          placeholder="isMarried"
          {...register("isMarried", {})}
          onChange={(e)=>dispatch(updateForm({isMarried:e.target.value}))}
          
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Forms;
