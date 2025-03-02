import loader from '/loader.gif';

const Loading = () => {
  return (
    <div>
        <img className='h-screen w-screen object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading