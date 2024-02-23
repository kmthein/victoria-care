import axios from "axios";
import React, { useRef, useState } from "react";
import { url } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/reducer/authReducer";
import { useToast } from "@chakra-ui/react";
import { formatISO9075 } from "date-fns";

const UserForm = ({ images, id, name, email, phone_num, dob }) => {
  const {user} = useSelector((state) => state.auth.currentUser);

  const initialInput = {
    id,
    name,
    email,
    phone_num,
    dob,
  };

  const DOB = formatISO9075(new Date(dob), { representation: 'date' });

  const [file, setFile] = useState();

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const [input, setInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toast = useToast();

  const updateUserHandler = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${import.meta.env.VITE_API}/user/update`, {
      values: input,
      id: id,
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(authActions.updateUser(res.data));
    toast({
      title: `Profile has been updated.`,
      status: "success",
      isClosable: true,
    });
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      await axios.post(`${url}/file/upload/${id}`, formData);
      const response = await axios.post(`${url}/user/patients`, { id: id });
      const userImage = response.data[0].images || image;
      const newData = {
        ...input,
        image: userImage,
      };
      dispatch(authActions.updateUser(res.data));
    } else {
      const userImage = image;
      const newData = {
        ...input,
        image: userImage,
      };
      dispatch(authActions.updateUser(res.data));
    }

    setFile();
  };

  return (
    <form onSubmit={updateUserHandler}>
      <div className=" mt-4 mb-8">
        <h4 className=" font-semibold pb-2 text-lg">My Account Settings</h4>
        <div className="text-[15px] profile">
          <div className=" my-4 pb-2 flex">
            <div className=" w-[110px]">
              <label htmlFor="name" className=" mr-8">
                Name
              </label>
            </div>
            <input
              type="text"
              defaultValue={name}
              name="name"
              className=" border-b-[1px]"
              onChange={inputChangeHandler}
            />
          </div>
          <div className=" my-4 pb-2 flex">
            <div className=" w-[110px]">
              <label htmlFor="name" className=" mr-8">
                Email
              </label>
            </div>
            <input
              type="email"
              defaultValue={email}
              className=" border-b-[1px]"
              name="email"
              onChange={inputChangeHandler}
            />
          </div>
          {/* <div className=" my-4 pb-2 flex">
                          <div className=" w-[110px]">
                            <label htmlFor="name" className=" mr-8">
                              Password
                            </label>
                          </div>
                          <input
                            type="password"
                            defaultValue={password}
                            className=" border-b-[1px]"
                          />
                        </div> */}
          <div className=" my-4 pb-2 flex">
            <div className=" w-[110px]">
              <label htmlFor="name" className=" mr-8">
                Phone
              </label>
            </div>
            <input
              type="text"
              defaultValue={phone_num}
              name="phone_num"
              className=" border-b-[1px]"
              onChange={inputChangeHandler}
            />
          </div>
          <div className=" my-4 pb-2 flex">
            <div className=" w-[110px]">
              <label htmlFor="name" className=" mr-8">
                Birthdate
              </label>
            </div>
            <input
              type="date"
              defaultValue={DOB}
              name="dob"
              className=" border-b-[1px] w-[195px]"
              onChange={inputChangeHandler}
            />
          </div>
          <div className=" my-4 flex items-center">
            <div className=" w-[110px]">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  className="  w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  className=" w-16 h-16 rounded-full object-cover"
                />
              )}
            </div>
            <div onClick={handleImageClick}>
              <button
                type="button"
                className=" bg-[#BEE3F8] py-2 px-1 rounded-md text-sm"
              >
                Upload Photo
              </button>
              <input
                type="file"
                ref={inputRef}
                onChange={fileChangeHandler}
                className=" hidden"
              />
            </div>
          </div>
          <div className="w-[45%]">
            <button
              type="submit"
              className=" bg-[#3a52af] w-full py-2 mt-4 rounded-md text-white"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
