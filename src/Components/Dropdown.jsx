import Select from "react-dropdown-select";

const Dropdown = ({ values, setValues }) => {
  const options = [
    {
      id: 1,
      name: "Bohemian",
    },
    {
      id: 2,
      name: "Art Deco",
    },
    {
      id: 3,
      name: "Contemporary",
    },
    {
      id: 4,
      name: "Interior architect",
    },
    {
      id: 5,
      name: "Eclecticism in architecture",
    },
    {
      id: 6,
      name: "Country",
    },
    {
      id: 7,
      name: "Minimalism",
    },
    {
      id: 8,
      name: "Mid-century modern",
    },
    {
      id: 9,
      name: "Transitional",
    },
    {
      id: 10,
      name: "Traditional",
    },
    {
      id: 11,
      name: "Farmhouse",
    },
    {
      id: 12,
      name: "Rustic",
    },
    {
      id: 13,
      name: "Organic",
    },
    {
      id: 14,
      name: "Industrial style",
    },
    {
      id: 15,
      name: "Organic",
    },
    {
      id: 16,
      name: "Scandinavian",
    },
    {
      id: 17,
      name: "Industrial",
    },
    {
      id: 18,
      name: "Coastal",
    },
    {
      id: 19,
      name: "Industrial interior design style",
    },
    {
      id: 20,
      name: "Modern",
    },
    {
      id: 21,
      name: "Shabby Chic",
    },
    {
      id: 22,
      name: "Traditional style",
    },
    {
      id: 23,
      name: "Kitchen designer",
    },
  ];
  return (
    <div className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-orange-100 mx-[5px] mb-[5px] text-[14px]">
      <Select
        searchable={false}
        options={options}
        labelField="name"
        valueField="id"
        onChange={(values) => setValues(values)}
      />
    </div>
  );
};

export default Dropdown;
