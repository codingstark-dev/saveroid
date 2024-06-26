import React, { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

type defautlProps = {
  defaultValue?: string;
  title: string;
  subtitle: string;
};
const Dlform = (props: defautlProps) => {
  const router = useRouter();
  let supportedUrl = [
    { route: 'pinterest-video-downloader', url: ['pinterest.com/pin', 'pin.it'] },
    { route: 'facebook-video-downloader', url: ['facebook.com', 'fb.com'] },
  ];
  // const [index, setIndex] = useState(0);
  // const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
  const [Textval, setTextval] = useState('');
  useEffect(() => {
    setTextval(props.defaultValue as string);
  }, [props.defaultValue]);
  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);
  let onChange = (e: any) => {
    let text: string = e.target.value;
    setTextval(text);
    // console.log(text.includes('pinterest.com'));
    let regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(text)) {
      // console.log(text);
      return e.target.setCustomValidity('');
    } else {
      return e.target.setCustomValidity('Please enter a valid url');
    }
  };
  let bool: Array<boolean> = [];
  let indexsint: number = 0;
  let formHandler = (event: FormEvent) => {
    event.preventDefault();
    supportedUrl.map((i, index) => {
      i.url.map((d) => {
        bool.push(Textval?.includes(d));
        indexsint++;
        // console.log(bool.filter((e) => e === true).length === 1);
        // switch (Textval.includes(d)) {
        //   case true:
        //     router.push(
        //       '/tools/' + supportedUrl[index].route + `?dl=${encodeURIComponent(Textval)}`
        //     );
        //     break;
        //   case false:
        //     router.push('/invalid-url' + `?dl=${encodeURIComponent(Textval)}`);
        //     break;
        //   default:
        //     break;
        // }
        if (Textval?.includes(d)) {
          router.push('/tools/' + supportedUrl[index].route + `?dl=${encodeURIComponent(Textval)}`);
        } else if (bool.filter((e) => e === false).length === indexsint) {
          router.push('/invalid-url' + `?url=${encodeURIComponent(Textval)}`);
        } 
        // else {
        //   router.push('/invalid-url' + `?url=${encodeURIComponent(Textval??"Empty Box")}`);
        // }
      });
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-red-700 h-auto pt-16 ">
        <div className=" max-w-2xl mx-auto">
          <h1 className="text-4xl text-center  font-semibold text-white  pt-3">{props.title} </h1>
          <h2 className=" text-center  font-medium text-white  pb-3 text-base">
            {props.subtitle}{' '}
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
              placeholder="Paste Link Here!"
              // placeholder={'Enter Pinterest Link' + TEXTS[index % TEXTS.length]}
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
