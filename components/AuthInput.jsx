const AuthInput = ({ input, handileChange, isSignin }) => {
  return (
    <div>
      {!isSignin && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="ferst name"
            value={input.firstName}
            name="firstName"
            onChange={handileChange}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="last name"
            value={input.lastName}
            name="lastName"
            onChange={handileChange}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email "
          value={input.email}
          name="email"
          onChange={handileChange}
        />
      </div>
      {!isSignin && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
            value={input.phone}
            name="phone"
            onChange={handileChange}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Cite"
            value={input.city}
            name="city"
            onChange={handileChange}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password "
          value={input.password}
          name="password"
          onChange={handileChange}
        />
      </div>
    </div>
  );
};

export default AuthInput;
