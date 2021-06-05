import React, { useEffect, useState } from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
// import { GetServerSidePropsContext } from 'next';
import Loader from '../../componets/Loader';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
const pinterest = () => {
  const [data, setdata]: any = useState(null);
  const [Loading, setLoading]: any = useState(false);

  const router = useRouter();

  let getPinData = (id: string) => {
    console.log(id);
    if (id != undefined) {
      if (id.includes('pin.it')) {
        var configExpandUrl: AxiosRequestConfig = {
          method: 'get',
          url: 'https://api.saveroid.com/expandurl',
          headers: {
            url: id,
          },
        };
        return axios(configExpandUrl)
          .then((result) => {
            if (result.data !== {} && result.data != null && result.data != '') {
              setLoading(true);
              const pinID = result.data.split('/')[4];

              var config1: AxiosRequestConfig = {
                method: 'get',
                url: 'https://api.saveroid.com/pin',
                headers: {
                  id: pinID,
                },
              };
              return axios(config1)
                .then((result) => {
                  if (result.data !== {} && result.data != null && result.data != '') {
                    setLoading(false);

                    return result.data;
                  }
                })
                .catch((err) => {
                  setLoading(false);

                  console.error(err);
                });
            }
          })
          .catch((err) => {
            setLoading(false);

            console.error(err);
          });
      } else if (id.includes('pinterest.com/pin/')) {
        const pinID = id.split('/')[4];
        setLoading(true);

        var config10: AxiosRequestConfig = {
          method: 'get',
          url: 'https://api.saveroid.com/pin',
          headers: {
            id: pinID,
          },
        };
        return axios(config10)
          .then((result) => {
            if (result.data !== {} && result.data != null && result.data != '') {
              setLoading(false);

              console.log(result.data);
              return result.data;
              // this.dataUrls = result.data;
              // this.errorAPi = true;
              // this.randomNumber = Math.floor(Math.random() * 1000) + 1;
            }
          })
          .catch((err) => {
            setLoading(false);

            console.error(err);
            alert(err);
            // this.errorAPi = false;s
          });
      }
    }
  };
  useEffect(() => {
    if (router.asPath !== router.route) {
      if (router.query.dl != undefined) {
        let fetchMyAPI = async () => {
          let apidata: JSON = await getPinData(router.query.dl as string);
          setdata(apidata);
        };
        fetchMyAPI();
      }
    }
  }, [router]);
  let videoData =
    data?.video?.length != undefined && data?.video.length == 0 ? (
      data?.video.map((e: any, i: number) => {
        return (
          <div key={i}>
            <div className="flex justify-center mx-10 items-center content-center m-6">
              <video
                src={e.url}
                controls
                className="w-auto rounded-lg shadow-lg focus:outline-transparent "
              ></video>
            </div>
            <div className="mx-5">
              <Link href={`https://api.saveroid.com/download?mode=video&url=${e.url}`}>
                <button
                  type="submit"
                  className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
                >
                  Download Video In HD
                </button>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <></>
    );
  let imageData =
    data?.image?.length != undefined && data?.image.length == 0 ? (
      data?.image.map((e: any, index: number) => {
        return (
          <div key={index}>
            <div className="flex justify-center mx-10 items-center content-center m-6">
              <img src={e.url} className="w-auto rounded-lg shadow-lg focus:outline-transparent " />
            </div>
            <div className="mx-5">
              <Link href={`https://api.saveroid.com/download?mode=image&url=${e.url}`}>
                <button
                  type="submit"
                  className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
                >
                  Download Image In HD{' '}
                </button>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <></>
    );
  return (
    <>
      <Main
        meta={
          <Meta
            title="Next.js Boilerplate Presentation"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
        dlform={true}
        defaultValue={router.query.dl != undefined ? (router.query.dl as string) : ('' as string)}
      >
        <br />
        {/* <pre>{JSON.stringify(data)}</pre> */}
        {Loading ? <Loader /> : <></>}

        {router.query.dl != undefined &&
        data?.video?.length != 0 &&
        data?.video?.length != undefined &&
        data?.image?.length != 0 &&
        data?.image?.length != undefined ? (
          <div>
            <div>{videoData}</div>
            <div>{imageData}</div>
          </div>
        ) : router.query.dl != undefined &&
          data?.video?.length != 0 &&
          data?.video?.length != undefined ? (
          data.video.map((e: any, index: number) => {
            return (
              <div>
                {' '}
                <div className="flex justify-center mx-10 items-center content-center m-6">
                  <video
                    key={index}
                    src={e.url}
                    controls
                    className="w-auto rounded-lg shadow-lg focus:outline-transparent "
                  ></video>
                </div>{' '}
                <div className="mx-5">
                  <Link href={`https://api.saveroid.com/download?mode=video&url=${e.url}`}>
                    <button
                      type="submit"
                      className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
                    >
                      Download Video In HD{' '}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : router.query.dl != undefined &&
          data?.image?.length != 0 &&
          data?.image?.length != undefined ? (
          data.image.map((e: any, index: number) => {
            return (
              <div>
                <div className="flex justify-center mx-10 items-center content-center m-6">
                  <img
                    key={index}
                    src={e.url}
                    className="w-auto rounded-lg shadow-lg focus:outline-transparent "
                  />{' '}
                </div>{' '}
                <div className="mx-5">
                  <Link href={`https://api.saveroid.com/download?mode=image&url=${e.url}`}>
                    <button
                      type="submit"
                      className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
                    >
                      Download Image In HD{' '}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : router.query.dl != undefined && data?.video != undefined ? (
          <div>
            <div className="flex justify-center mx-10 items-center content-center m-6">
              <video
                src={data?.video.url}
                controls
                className="w-auto rounded-lg shadow-lg focus:outline-transparent "
              ></video>
            </div>{' '}
            <div className="mx-5">
              <Link href={`https://api.saveroid.com/download?mode=video&url=${data?.video.url}`}>
                <button
                  type="submit"
                  className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
                >
                  Download Video In HD{' '}
                </button>
              </Link>{' '}
            </div>
          </div>
        ) : router.query.dl != undefined && data?.image != undefined ? (
          <div>
            <div className="flex justify-center mx-10 items-center content-center m-6">
              <img
                src={data.image.url}
                className="w-auto rounded-lg shadow-lg focus:outline-transparent "
              />
            </div>{' '}
            <div className="mx-5">
              <Link href={`https://api.saveroid.com/download?mode=image&url=${data?.video.url}`}>
                <button
                  type="submit"
                  className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  mx-2 text-md hover:bg-red-500 hover:text-white"
                >
                  Download Image In HD{' '}
                </button>
              </Link>{' '}
            </div>
          </div>
        ) : (
          <></>
        )}
      </Main>
    </>
  );
};
// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   let apidata: JSON = await getPinData(context.query.dl as string);
//   console.log(context.query.dl, apidata);
//   return { props: { apidata } };
//   // ...
// };
export default pinterest;
