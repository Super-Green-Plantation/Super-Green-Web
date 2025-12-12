

const page = ({params}:any) => {
    const id = params.id
  return (
    <div className='mt-10'>dynamic estates {id}</div>
  )
}

export default page