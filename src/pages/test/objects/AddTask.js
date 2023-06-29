import { useImmer } from "use-immer";

const AddTask = () => {
  const [userInfo, updateUserInfo] = useImmer({
    username: "Masood Acheampong",
    age: "20",
    personalInfo: {
      homeAddress: "Nana Agyenim St. 291",
      contact: "0597812947",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = (e) => {
    updateUserInfo((draft) => {
      draft.username = e.target.value;
    });
  };
  const handleAgeChange = (e) => {
    updateUserInfo((draft) => {
      draft.age = e.target.age;
    });
  };
  const handleHomeAddChange = (e) => {
    updateUserInfo((draft) => {
      draft.personalInfo.homeAddress = e.target.value;
    });
  };
  const handleContactChange = (e) => {
    updateUserInfo((draft) => {
      draft.personalInfo.contact = e.target.value;
    });
  };
  const handleImageChange = (e) => {
    updateUserInfo((draft) => {
      draft.personalInfo.image = e.target.value;
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={userInfo.username}
            onChange={handleNameChange}
          />{" "}
        </label>
        <br />
        <label htmlFor="age">
          Age
          <input type="text" value={userInfo.age} onChange={handleAgeChange} />
        </label>
        <br />
        <label htmlFor="Home Address">
          Home Address
          <input
            type="text"
            value={userInfo.personalInfo.homeAddress}
            onChange={handleHomeAddChange}
          />
        </label>
        <br />
        <label htmlFor="Contact">
          Contact
          <input
            type="text"
            value={userInfo.personalInfo.contact}
            onChange={handleContactChange}
          />
        </label>
        <br />
        <label htmlFor="Image">
          Image
          <img
            src={userInfo.personalInfo.image}
            onChange={handleImageChange}
            alt={userInfo.username}
          />
        </label>
      </form>
      <div>
        <p>Your username is: {userInfo.username}</p>
        <p>You are {userInfo.age} years old.</p>
        <p>You live on the {userInfo.personalInfo.homeAddress}</p>
        <p>People can contact you on {userInfo.personalInfo.contact}</p>
      </div>
    </div>
  );
};

export default AddTask;
