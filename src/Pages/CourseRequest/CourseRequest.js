import {useForm} from 'react-hook-form';
import {useRef} from 'react';

const CourseRequest = () => {
  const form = useRef(null);
  const {handleSubmit, register} = useForm();

  const formSubmit = data => {
    console.log(data);
  }

  return (
    <form ref={form} className={"container course-request-container"} onSubmit={handleSubmit(formSubmit)}>
      <h6>Couldn't find your course? Request it! We'll respond as soon as possible.</h6>
      <div className={"contact-info-inputs"}>
        <input placeHolder={"Your name"} {...register("name", {
            required: true
          })}/>
        <input placeHolder={"Your email"} {...register("email", {
            required: true
          })}/>
        <input placeHolder={"Your phone number"} {...register("number", {
            required: true
          })}/>
      </div>

      <textarea rows={"auto"} cols={"auto"} placeHolder={"Note: Include the sales page, name of the course and the owner. Same goes for multiple courses."} {...register("message", {
          required: true
        })}/>
      <button type={"submit"}>Send Request</button>
    </form>
  );
};

export default CourseRequest;
