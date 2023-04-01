import './style.css';

const Home = () => {
  return (
    <div>
      <div className='insta-title'>
        <h2 className='text-white text-4xl p-3'>Story</h2>
      </div>
      <div className='insta-stories flex p-3 overflow-auto items-center border-b border-b-gray-800'>
        <a href='#0' className='insta-stories-avatar'>
          <span className='avatar p-1 rounded-full relative'>
            <img
              className='w-[80px] h-[80px] object-cover object-center rounded-full block z-[2] relative'
              src='https://res.cloudinary.com/ndq04/image/upload/v1679719106/Photos/IMG20230311201137_bzhuww.jpg'
              alt=''
            />
          </span>
          <span className='font-medium text-lg mt-2'>Quang</span>
        </a>
        <a href='#0' className='insta-stories-avatar ml-4'>
          <span className='avatar p-1 rounded-full relative'>
            <img
              className='w-[80px] h-[80px] object-cover object-center rounded-full block z-[2] relative'
              src='https://res.cloudinary.com/ndq04/image/upload/v1679719106/Photos/IMG20230311201137_bzhuww.jpg'
              alt=''
            />
          </span>
          <span className='font-medium text-lg mt-2'>Quang</span>
        </a>
        <a href='#0' className='insta-stories-avatar ml-4'>
          <span className='avatar p-1 rounded-full relative'>
            <img
              className='w-[80px] h-[80px] object-cover object-center rounded-full block z-[2] relative'
              src='https://res.cloudinary.com/ndq04/image/upload/v1679719106/Photos/IMG20230311201137_bzhuww.jpg'
              alt=''
            />
          </span>
          <span className='font-medium text-lg mt-2'>Quang</span>
        </a>
      </div>
      <div className='insta-post'>
        <div className='insta-post-header flex items-center p-2'>
          <a href='#0' className='insta-post-avatar'>
            <img
              className='w-full h-full object-cover object-center rounded-full relative'
              src='https://res.cloudinary.com/ndq04/image/upload/v1679719106/Photos/IMG20230311201137_bzhuww.jpg'
              alt=''
            />
          </a>
          <div className='text-white font-semibold text-lg'>Quang</div>
          <button className='insta-post-header-actions'>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className='insta-post-image'>
          <img
            className='w-full h-[320px] object-cover object-center'
            src='https://res.cloudinary.com/ndq04/image/upload/v1679719106/Photos/IMG20230311201137_bzhuww.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
