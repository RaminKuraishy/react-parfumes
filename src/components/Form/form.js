import "./form.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = props => {
  const emptyBin = () => {
    props.setCart([]);
  };
  const mapCart = () => {
    props.cart.map(element => {
      console.log(
        element.name + "," + " " + element.color + "," + " " + element.price
      );
    });
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "+380",
      address: "",
      age: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("What is your name?"),
      lastName: Yup.string().required("What is your surname?"),

      phoneNumber: Yup.number().required("What is your phone number?"),

      address: Yup.string().required("What is your delivery address?"),
      age: Yup.boolean().oneOf(
        [true],
        "You can not buy it until 18 years old :("
      ),
    }),
    onSubmit: values => {
      if (props.cart.length === 0) {
        console.log("There is nothing to buy :(");
      } else {
        console.log(
          "User Info:" +
            " " +
            values.firstName +
            " " +
            values.lastName +
            ", " +
            values.phoneNumber +
            ", " +
            values.address
        );
        mapCart();
        emptyBin();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              name="firstName"
              id="form3Example1"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example1">
              {formik.errors.firstName && formik.touched.firstName ? (
                <p className="red">{formik.errors.firstName}</p>
              ) : (
                <p>First name</p>
              )}
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              id="form3Example2"
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example2">
              {formik.errors.lastName && formik.touched.lastName ? (
                <p className="red">{formik.errors.lastName}</p>
              ) : (
                <p>Last name</p>
              )}
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="tel"
              name="phoneNumber"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              id="form3Example2"
              className="form-control"
            />

            <label className="form-label">
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <p className="red">{formik.errors.phoneNumber}</p>
              ) : (
                <p>Phone Number</p>
              )}
            </label>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4">
        <input
          type="textarea"
          name="address"
          id="form3Example3"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.address}
          className="form-control"
        />
        <label className="form-label" htmlFor="form3Example3">
          {formik.errors.address && formik.touched.address ? (
            <p className="red">{formik.errors.address}</p>
          ) : (
            <p>Address</p>
          )}
        </label>
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          name="age"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.age}
          id="form2Example33"
        />
        <label className="form-check-label" htmlFor="form2Example33">
          {formik.errors.age && formik.touched.age ? (
            <p className="red">{formik.errors.age}</p>
          ) : (
            <p>18+?</p>
          )}
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">
        Buy
      </button>
    </form>
  );
};

export default Form;
