import React, { useEffect, useState } from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import Image from 'next/image';

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
    if (id != undefined) {
      if (id.includes('pin.it')) {
        setLoading(true);
        var configExpandUrl: AxiosRequestConfig = {
          method: 'get',
          url: 'https://api.saveroid.com/expandurl',
          headers: {
            url: id,
          },
        };
        return axios(configExpandUrl)
          .then((result) => {
            if (JSON.stringify(result.data) !== '{}' && result.data != null && result.data != '') {
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
                  if (
                    JSON.stringify(result.data) !== '{}' &&
                    result.data != null &&
                    result.data != ''
                  ) {
                    setLoading(false);

                    return result.data;
                  } else {
                    setLoading(false);
                    router.push('/invalid-url' + `?url=${id}`);
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
            if (JSON.stringify(result.data) !== '{}' && result.data != null && result.data != '') {
              setLoading(false);

              // console.log(JSON.stringify(result.data) !== '{}');
              return result.data;
              // this.dataUrls = result.data;
              // this.errorAPi = true;
              // this.randomNumber = Math.floor(Math.random() * 1000) + 1;
            } else {
              setLoading(false);
              router.push('/invalid-url' + `?url=${id}`);
            }
          })
          .catch((err) => {
            setLoading(false);

            console.error(err);
            alert(err);
            // this.errorAPi = false;s
          });
      } else {
        router.push('/invalid-url' + `?url=${id}`);
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

  return (
    <>
      <Main
        meta={
          <Meta
            title="Pinterest Video Downloader - Download Pinterest Videos, Images, GIF Online and Pinterest Story"
            description="Pinterest Video Downloader the latest tool 100% working Also, fast way to Download Pinterest Videos, Images, GIF Online and Pinterest Story"
            canonical={typeof window !== 'undefined' ? window.location.href : ''}
            ogimg={{
              url: '/images/pinterest-video-downloader.webp',
              width: 2400,
              height: 1600,
              alt: 'SaveRoid - All in one downloader',
            }}
            keyword={
              'pinterest video downloader,free online pinterest video downloader,pinterest video downloader ios,pinterest video downloader chrome,pinterest video downloader website,best pinterest video downloader, Pinterest gif downloader, Pinterest downloader online, Pinterest images downloader, Pinterest photo downloader, Pinterest videos downloader, free online pinterest video downloader, download Pinterest video, download pinterest images, pinterest video downloader online'
            }
          />
        }
        dlform={true}
        title="Pinterest Video Downloader 2021"
        subtitle="Download Pinterest video, Image, Gif online and Pinterest Story Downloader"
        defaultValue={router.query.dl != undefined ? (router.query.dl as string) : ('' as string)}
      >
        {/* <pre>{JSON.stringify(data)}</pre> */}
        {Loading ? <Loader /> : <></>}

        {router.query.dl != undefined &&
        data?.video?.length != 0 &&
        data?.video?.length != undefined &&
        data?.image?.length != 0 &&
        data?.image?.length != undefined ? (
          <div>
            <div>
              {data.video.map((e: any, i: number) => {
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
                          className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  text-md hover:bg-red-500 hover:text-white"
                        >
                          Download Video In HD
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              {data?.image.map((e: any, index: number) => {
                return (
                  <div key={index}>
                    <div className="flex justify-center mx-10 items-center content-center m-6">
                      <img
                        src={e.url}
                        className="w-auto rounded-lg shadow-lg focus:outline-transparent "
                      />
                    </div>
                    <div className="mx-5">
                      <Link href={`https://api.saveroid.com/download?mode=image&url=${e.url}`}>
                        <button
                          type="submit"
                          className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  text-md hover:bg-red-500 hover:text-white"
                        >
                          Download Image In HD{' '}
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : router.query.dl != undefined &&
          data?.video?.length != 0 &&
          data?.video?.length != undefined ? (
          data.video.map((e: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex justify-center mx-10 items-center content-center m-6">
                  <video
                    src={e.url}
                    controls
                    className="w-auto rounded-lg shadow-lg focus:outline-transparent "
                  ></video>
                </div>{' '}
                <div className="mx-5">
                  <Link href={`https://api.saveroid.com/download?mode=video&url=${e.url}`}>
                    <button
                      type="submit"
                      className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  text-md hover:bg-red-500 hover:text-white"
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
              <div key={index}>
                <div className="flex justify-center mx-10 items-center content-center m-6">
                  <img
                    src={e.url}
                    className="w-auto rounded-lg shadow-lg focus:outline-transparent "
                  />{' '}
                </div>{' '}
                <div className="mx-5">
                  <Link href={`https://api.saveroid.com/download?mode=image&url=${e.url}`}>
                    <button
                      type="submit"
                      className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  text-md hover:bg-red-500 hover:text-white"
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
                  className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  text-md hover:bg-red-500 hover:text-white"
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
              <Link href={`https://api.saveroid.com/download?mode=image&url=${data?.image.url}`}>
                <button
                  type="submit"
                  className="focus:outline-transparent items-center font-medium text-red-500 w-full text-center  p-1 h-12  outline-transparent bg-white border-4 rounded-2xl border-red-400  text-md hover:bg-red-500 hover:text-white"
                >
                  Download Image In HD{' '}
                </button>
              </Link>{' '}
            </div>
          </div>
        ) : (
          <></>
        )}
        <br />
        <div className="lg:max-w-2xl mx-auto px-5 sm:max-w-lg md:max-w-lg pt-2 prose prose-red">
          <h2>Pinterest Video downloader Tool</h2>
          <Image
            alt="Pinterest Video Downloader"
            src="/images/pinterest-video-downloader.webp"
            layout="responsive"
            width={2400}
            height={1600}
            className="w-full h-auto rounded-lg shadow"
          ></Image>
          <p>
            SaveRoid is a free Pinterest video downloader online tool. You can also download
            Pinterest Images, Gif and Pinterest Story directly to your computer, tablet or mobile by
            using SaveRoid. You can save video in high-definition in mp4 and high-definition in jpeg
            or png, Also SaveRoid Pinterest Video Downloader is fast and secure.
          </p>
          {/* <p>
            <ul>
              <li>
                <a href="/tools/pinterest-image-downloader">Pinterest Image Downloader</a>
              </li>
              <li>
                <a href="">Pinterest Gif Downloader</a>
              </li>
              <li>
                <a href="">Pinterest Story Downloader</a>
              </li>
            </ul>
          </p> */}
          <p>
            As We Know Pinterest is one of the fastest growing social media platforms. It’s a larger
            and more diverse platform than other social media channels, as users can follow anyone
            they want to and not just people they already know.
          </p>
          <h2>How to download Pinterest Videos, Images, Gif and Pinterest Story</h2>
          <p>
            SaveRoid is easy-to-use for Everyone. You can easily download videos from Pinterest
            Video Downloader Tool without any limitations. Also, you do not to need to pay any
            charges. This tool is completely free. Follow the simple steps below to download
            Pinterest videos online.
          </p>
          <ul>
            <li>
              Open Pinterest App and select the video or image or gif which you want to download.
            </li>
            <li>
              Tap on ••• icon at the top right corner of the Pinterest app if you are using the
              latest version of the Pinterest app then Tap on ••• icon at the bottom right corner of
              the app. After taping ••• icon then tap on the copy link.
            </li>
            <li>
              Paste the video Url in the <code>Input Box</code>, and Tap on Download button.
            </li>
            <li>
              After that the video or image will load, below this you will see Download Button.
            </li>
            <li>Click on Download button and wait for download!!</li>
            <li>Voila 🎉... Download Done!!</li>
          </ul>
          <h2>Repin In Pinterest</h2>
          <p>
            Let's say you like someone, but that's not enough to add them to your own boards. This
            is where the like button comes into play. To add a pin to your account, click "Repin"
            and follow the same steps as when adding a pin. Move the mouse over the image to
            Pinterest and three buttons appear: repin, like and comment.
          </p>
          <h2>Board Name In Pinterest</h2>
          <p>
            Give your board a descriptive name, so your followers know what kind of pins they will
            find on your board. Select this option to create a board similar to the other two
            options on the next page. If the category option is set to "All" on Pinterest, select
            "Close" to select other placeholders.
          </p>
          <p>
            Make sure you are using a high quality file. Test whether it works and make sure it
            matches the contents of the pins. Click Publish and select the board you want to add it
            to. You can crop, edit or add logos and text in the editor.
          </p>
          <p>
            The next time you select Save Image, Pinterest gives you the option to either save the
            image on your current board or create a new board. Select Save this time to return to
            your home feed. Once you have selected Save, you will be prompted to create the board.
          </p>
          <h2>Pinterest For Business</h2>
          <p>
            Find out how to use{' '}
            <a href="https://business.pinterest.com">
              {' '}
              Pinterest for business
            </a>
            . Pinterest is much more than just a social network. It is also a visual search engine
            and a productivity tool. Like other social networks, Pinterest is a place to connect
            with friends and influencers.
          </p>
          <p>
            If you're a US-based brand that doesn't have a large audience, use Pinterest to store
            content and product ideas. Over 50% of Pinterest users live outside the US, which means
            you have the chance to reach a wider international audience with Pinterest.
          </p>
          <p>
            Many users tend to limit themselves to what they use Pinterest for: wishlist, tutorials,
            gift ideas, or a combination of them all. With a few tweaks, you can get a lot more
            mileage out of your Pinterest boards. Using Pinterest in this way is not common place,
            but you will deserve the attention of all visitors who happen to check out your board.
          </p>
          <h2>FAQ About Pinterest Downloader Tools</h2>
          <ul>
            <li>
              <h3>Does SaveRoid.com is Paid?</h3>
              <p>No!! isn’t SaveRoid is free for forever. User Satisfaction is our goal </p>
            </li>
            <li>
              <h3>Is SaveRoid safe for my device?</h3>
              <p>Yes!! SaveRoid is completely safe to download No virus, No malware.</p>
            </li>
            <li>
              <h3>Does SaveRoid track a user's downloaded video?</h3>
              <p>
                No, SaveRoid does not store downloaded videos. All videos are hosted on Pinterest
                servers and we do not store the download history of viewers. Everyone can use this
                tool anonymously. This Tool is 100% safe for viewers. Also read{' '}
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
            </li>
            <li>
              <h3>How to use the SaveRoid on Android?</h3>
              <p>
                There are three steps to download videos from Pinterest on Android. The first step
                is to visit <code>SaveRoid.com</code> on your{' '}
                <a
                  href="https://www.tomsguide.com/us/best-android-browsers,review-6448.html"
                  rel="dofollow"
                >
                  android web browser
                </a>
                . The second step is to paste your copied URL in the downloader input and the third
                step is to click on the download button. After following these steps your Pinterest
                video is ready for download.
              </p>
            </li>
            <li>
              <h3>How to download Pinterest videos on Mac OS?</h3>
              <p>
                Pinterest Video Downloader lets you save Pinterest videos to your computer, tablet
                or mobile phone without registration or software.
                <br />
                Follow This Step:
              </p>
              <ul className="ml-5">
                <li>
                  Copy the Url of the Pinterest videos that you want to save or download in your mac
                  os.
                </li>{' '}
                <li>Paste the Url of the video into the Link input box.</li>{' '}
                <li>Click the "Download" button to begin the download process.</li>{' '}
                <li>
                  When the process is completed, your video will be ready for download. Click on the
                  download button to Download Pinterest Video.
                </li>
              </ul>
            </li>
            <li>
              <h3>Where is the video or image located after download?</h3>
              <p>
                When you download videos or images, they are usually saved in Default folder
                selected by your browser. If you cannot find the downloaded videos then follow the
                instructions given below.
              </p>{' '}
              <ul className="ml-5">
                <li>
                  If you are using Windows, then press <code>Ctrl + J</code> on the keyboard to see
                  the download history.
                </li>
                <li>
                  If you are using Mac, then press <code>Cmd + Shift + J</code> on the keyboard to
                  see the download history.
                </li>
                <li>If you're using a smartphone, check your browser's default download path.</li>
              </ul>
            </li>
          </ul>
        </div>
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
