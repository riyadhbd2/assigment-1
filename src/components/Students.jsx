import { useEffect, useState } from "react";


const Students = () => {
  const [oneStudents, setOneStudents] = useState([]);
  const [twoStudents, setTwoStudents] = useState([]);

  useEffect(() => {
    fetch("one.json")
      .then((res) => res.json())
      .then((data) => setOneStudents(data));
  }, []);

  useEffect(() => {
    fetch("two.json")
      .then((res) => res.json())
      .then((data) => setTwoStudents(data));
  }, []);
  return (
    <div className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          {/* <!-- Search Box --> */}
          <form>
            <div className="border border-gray-400 rounded-lg flex">
              <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                  placeholder="Search by Student "
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          {/* <!-- Search Box Ends --> */}
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            {/* main table body start here */}
            <tbody>
              {/* <!-- class one --> */}
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  Class One
                </td>
              </tr>
              {/* Map method start here */}
              {oneStudents.map((oneStudent) => (
                <tr key={oneStudent.Id} className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">{oneStudent.Id}</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={oneStudent.img}
                        width="32"
                        height="32"
                        alt="John Smith"
                      />
                      <span className="whitespace-nowrap">
                        {oneStudent.Name}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">
                    {oneStudent.Score}
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">
                    {oneStudent.Percentage}
                  </td>
                </tr>
              ))}

              {/* <!-- class two --> */}
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  Class Two
                </td>
              </tr>

              {twoStudents.map((twoStudent) => (
                <tr key={twoStudent.Id} className="border-b border-[#7ECEB529]">
                  <td className="p-5 text-sm md:text-xl">{twoStudent.Id}</td>
                  <td className="p-5 text-sm md:text-xl">
                    <div className="flex space-x-3 items-center">
                      <img
                        className="w-8 h-8"
                        src={twoStudent.img}
                        width="32"
                        height="32"
                        alt=""
                      />
                      <span className="whitespace-nowrap">{twoStudent.Name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm md:text-xl text-center">{twoStudent.Score}</td>
                  <td className="p-5 text-sm md:text-xl text-center">{twoStudent.Percentage}</td>
                </tr>
              ))}
            </tbody>
            {/* Table body end here */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
