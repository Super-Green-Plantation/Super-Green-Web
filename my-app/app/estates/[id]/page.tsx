export default function page({ params}: {params: { id: string };}){


  console.log("ID →", params.id);

  const id = parseInt(params.id)
   

   const estate = [
    {
      id: 1,
      img: "/sample-1.jpg",
      location: "Galle",
    },
    {
      id: 2,
      img: "/sample-2.jfif",
      location: "Matara",
    },
    {
      id: 3,
      img: "/sample-3.jfif",
      location: "Hambantota",
    },
    {
      id: 4,
      img: "/sample-4.jfif",
      location: "Rathnapura",
    },
    {
      id: 5,
      img: "/sample-5.jpg",
      location: "Thanamalwila",
    },
  ];

  return (
    <>
    <div className="mt-5">

      {estate.map((es, index)=>(
        <div key={index}>
          <img src={es.id == id ? es.img : ""} alt="" />
          <h2>{es.id == id ? es.location : ""}</h2>
        </div>
      ))}

    </div>
    </>
  );
}
