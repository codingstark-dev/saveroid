import React, { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type defautlProps = {
  defaultValue?: string;
};
const Dlform = (props: defautlProps) => {
  const router = useRouter();
  let supportedUrl = [
    
    { route: 'pinterest-video-downloader', url: ['pinterest.com', 'pin.it'] },
    { route: 'facebook-video-downloader', url: ['facebook.com', 'fb.com'] },
  ];

  const [Textval, setTextval] = useState('');
  useEffect(() => {
    setTextval(props.defaultValue as string);
  }, [props.defaultValue]);
  let onChange = (e: any) => {
    let text: string = e.target.value;
    setTextval(text);
    // console.log(text.includes('pinterest.com'));

    if (text.length < 5) {
      // console.log(text);
      return e.target.setCustomValidity('Please select a date in the past.');
    } else {
      e.target.setCustomValidity('');
    }
  };
  let formHandler = (event: FormEvent) => {
    event.preventDefault();
    supportedUrl.map((i, index) => {
      i.url.map((d) => {
        if (Textval.includes(d)) {
          router.push('/tools/' + supportedUrl[index].route + `?dl=${encodeURIComponent(Textval)}`);
        }
        console.log(Textval.includes(d), index);
      });
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-red-700 h-auto pt-16 ">
        <div className=" max-w-2xl mx-auto">
          <h1 className="text-4xl text-center  font-semibold text-white  pt-3">headLine</h1>
          <h2 className=" text-center  font-medium text-white  pb-3 text-base">
            Download Pinterest video, Image and Gif online
          </h2>

          <form
            method="post"
            onSubmit={formHandler}
            // @submit.prevent="navToDl"
            className="flex p-2"
            autoComplete="true"
          >
            <input
              // oninvalid="this.setCustomValidity('Please Enter Valid Link')"
              // onvalid="this.setCustomValidity('')"

              // onInvalid={(e) => {
              //   console.log(e.target.value)
              //   e.target.setCustomValidity('Please agree to the terms and conditions!');
              // }}
              type="text"
              value={Textval == undefined ? '' : Textval}
              // onInvalid={formOnInvalidHandler}
              // v-on:input="updateValue($event.target.value)"
              // onchange="this.setCustomValidity('')"
              onChange={onChange}
              placeholder="Enter Pinterest Link"
              className="focus:outline-none items-center w-full  m-0 p-4 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400 text-base "
            />
            <button
              type="submit"
              className="focus:outline-none items-center font-medium text-red-500 w-28 text-center  p-1 h-12  outline-transparent  text-base  bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
            >
              Download
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dlform;
