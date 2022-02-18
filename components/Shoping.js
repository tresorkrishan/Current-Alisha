import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import listening from '../public/mic.gif';
// import './styles/Entertainment.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Siriwave from 'react-siriwave';
import Footer from './Footer.js';
import laughing from '../public/laughing.png';
import news from '../public/news.png';
import tarot from '../public/tarot.png';
// import clock from '../public/clock.png';
import book from '../public/book.png';
// import { CSSTransition } from 'react-transition-group';
import cross from '../public/cross.png';
import Tts from 'react-native-tts';
// import Voice from '@react-native-community/voice';
import Modal from 'react-native-modal';
import styles from './styles/EntertainmentStyle.js';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import aquarius from '../public/aquarius.png';
import aries from '../public/aries.png';
import pisces from '../public/pisces.png';
import cancer from '../public/cancer.png';
import gemini from '../public/gemini.png';
import leo from '../public/leo.png';
import libra from '../public/libra.png';
import virgo from '../public/virgo.png';
import taurus from '../public/taurus.png';
import scorpio from '../public/scorpio.png';
import Iphone from '../public/iphone.jpeg';
import Ipad from '../public/ipad.png';
import Watches from '../public/watch.jpeg';
import Mac from '../public/mac.png';
import sagittarius from '../public/sagittarius.png';
import capricorn from '../public/capricorn.png';
import loadingImage from '../public/duck.gif';
import IphoneMenu from './IphoneMenu';
import IpadMenu from './IpadMenu';
import MacMenu from './MacMenu';
import WatchMenu from './WatchMenu';

const Shoping = ({navigation}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showListening, setShowListening] = useState(false);
  const [amplitude, setAmplitude] = useState(0);
  const [modalContent, setModalContent] = useState();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [horo, setHoro] = useState();
  // const [location, setLocation] = useState();

  let facts = [
    'The scientific term for brain freeze is “sphenopalatine ganglioneuralgia”',

    'Canadians say “sorry” so much that a law was passed in 2009 declaring that an apology can’t be used as evidence of admission to guilt.',

    'Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.',

    'The only letter that doesn’t appear on the periodic table is J.',

    'One habit of intelligent humans is being easily annoyed by people around them, but saying nothing in order to avoid a meaningless argument.',

    'If a Polar Bear and a Grizzly Bear mate, their offspring is called a “Pizzy Bear”.',

    'In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola.',

    'There were two AI chatbots created by Facebook to talk to each other, but they were shut down after they started communicating in a language they made for themselves.',

    'Nintendo trademarked the phrase “It’s on like Donkey Kong” in 2010.',

    'Daniel Radcliffe was allergic to his Harry Potter glasses.',

    'The famous line in Titanic from Leonardo DiCaprio, “I’m king of the world!” was improvised.',

    'A single strand of Spaghetti is called a “Spaghetto”.',

    'Hershey’s Kisses are named that after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt.',

    'Princess Peach didn’t move until 1988, designers believed it was too complicated to make her a movable character.',

    'To leave a party without telling anyone is called in English, a “French Exit”. In French, it’s called a “partir à l’anglaise”, to leave like the English.',

    'If you cut down a cactus in Arizona, you’ll be penalized up to 25 years in jail. It is similar to cutting down a protected tree species.',

    'The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.',

    'In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt.',

    'The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarves.',

    'If you point your car keys to your head, it increases the remote’s signal range.',

    'Fruit stickers are edible, though the same as any fruit, washing prior to eating is recommended. The glue used for them is regulated by the FDA.',

    'The scientific name for Giant Anteater is Myrmecophaga Tridactyla. This means “ant eating with three fingers”.',

    'Astronaut is a compound word derived from the two Ancient Greek words “Astro” meaning “star” and “naut” meaning “sailor”. So astronaut literally means “star sailor”.',

    'The flashes of colored light you see when you rub your eyes are called “phosphenes”.',

    'At birth, a baby panda is smaller than a mouse.',

    'Iceland does not have a railway system.',

    'The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1.',

    'Forrest Fenn, an art dealer and author, hid a treasure chest in the Rocky Mountains worth over 1 million dollars. It still has not been found.',

    'The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band. He graduated in May 2017.',

    'The world’s largest grand piano was built by a 15-year-old in New Zealand.',

    'The tongue is the only muscle in one’s body that is attached from one end.',

    'There is a company in Japan that has schools that teach you how to be funny. The first one opened in 1982. About 1,000 students take the course each year.',

    'The Lego Group is the world’s most powerful brand. There are more Lego Minifigures than there are people on Earth.',

    'The Bagheera kiplingi spider was discovered in the 1800s and is the only species of spider that has been classified as vegetarian.',

    'There is a boss in Metal Gear Solid 3 that can be defeated by not playing the game for a week; or by changing the date.',

    'The Roman – Persian wars are the longest in history, lasting over 680 years. They began in 54 BC and ended in 628 AD.',

    'Elvis was originally blonde. He started coloring his hair black for an edgier look. Sometimes, he would touch it up himself using shoe polish.',

    'If you translate “Jesus” from Hebrew to English, the correct translation is “Joshua”. The name “Jesus” comes from translating the name from Hebrew, to Greek, to Latin, to English.',

    'Ed Sheeran bought a ticket to LA with no contacts. He was spotted by Jamie Foxx, who offered him the use of his recording studio and a bed in his Hollywood home for six weeks.',

    'German Chocolate Cake is named after an American baker by the name of Samuel German.',

    'The first service animals were established in Germany during World War I. References to service animals date as far back as the mid-16th Century.',

    'An 11-year-old girl proposed the name for Pluto after the Roman god of the Underworld.',

    'The voice actor of SpongeBob and the voice actor of Karen, Plankton’s computer wife, have been married since 1995.',

    'An Italian banker, Gilberto Baschiera is considered a modern-day Robin Hood. Over the course of 7 years, he secretly diverted 1 million euros to poorer clients from the wealthy ones so they could qualify for loans. He made no profit and avoided jail in 2018 due to a plea bargain.',

    'Octopuses and squids have beaks. The beak is made of keratin – the same material that a bird’s beak, and our fingernails are made of.',

    'An estimated 50% of all gold ever mined on Earth came from a single plateau in South Africa: Witwatersrand.',

    "75% of the world's diet is produced from just 12 plant and five different animal species.",

    'The original Star Wars premiered on just 32 screens across the U.S. in 1977. This was to produce buzz as the release widened to more theaters.',

    'The British government coined the slogan, “Keep Calm and Carry on” during World War 2 in order to motivate citizens to stay strong.',

    'Apple paid a couple $1.7 million dollars for their plot of land, which was only worth $181,700.',

    'Tirana, the capital of Albania has a lot of things in common with other European capitals – except one.  It’s one of two capitals without a Mcdonald’s. The second is Vatican City.',

    'Sour Patch Kids are from the same manufacturer as Swedish Fish. The red Sour Patch Kids are the same candy as Swedish Fish, but with sour sugar.',

    'The largest Japanese population outside of Japan stands at 1.6 million people who live in Brazil.',

    'IKEA is an acronym which stands for Ingvar Kamprad Elmtaryd Agunnaryd, which is the founder’s name, farm where he grew up, and hometown.',

    'In 2009, Stephen Hawking held a reception for time travelers, but didn’t publicize it until after. This way, only those who could time travel would be able to attend. Nobody else attended.',

    'Violin bows are commonly made from horse hair.',

    'There are less than 30 ships in the Royal Canadian Navy which are less than most third-world countries.',

    'Larry the Cable Guy’s real name is Daniel Lawrence Whitney. His notable Southern accent is fake – he was born and raised in the midwest, not the South.',

    'The youngest Pope in history was Pope Benedict IX who was 11 years old at the time of the election. He is also the only person to have been the Pope more than once.',

    'There were only 9 developers on the team for GoldenEye 007 for Nintendo 64.',

    'The game received multiple year-end awards, including the BAFTA Interactive Entertainment Games Award in 1998, and four awards from the inaugural AIAS Interactive Achievement Awards.',

    'Costa Coffee employs Gennaro Pelliccia as a coffee taster, who has had his tongue insured for £10 million since 2009.',

    'Johnny Cash took only three voice lessons before his teacher advised him to stop taking lessons and to never deviate from his natural voice.',

    'There is an island called “Just Enough Room”, where there’s just enough room for a tree and a house.',

    'People who post their fitness routine on Facebook are more likely to have psychological problems.',

    'Medieval chastity belts are a myth. A great majority of examples now existing were made in the 18th and 19th centuries as jokes.',

    'Nowadays, millionaires with just $1 million aren’t considered wealthy anymore by most Americans. Now, the typical American sees at least $2.4 million as wealthy.',

    'Hanna-Barbera pitched The Flintstones to networks for 8 weeks before it was finally picked up. It became the first-ever animated show to air during primetime.',

    'There is a company that sells mirrors that make people look 10 pounds thinner. Overall, the mirrors have contributed to 54% of total sales for retailers that use it.',

    'There’s no period in “Dr. Pepper”. It was removed because the old logo font made it look like “Di: Pepper”.',

    'There is an underwater version of rugby, unsurprisingly called “underwater rugby”.',

    'Standing around burns calories. On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.',

    'Although GPS is free for the world to use, it costs $2 million per day to operate. The money comes from American tax revenue.',

    'In World War II, Germany tried to collapse the British economy by dropping millions of counterfeit bills over London.',

    'The human eye is so sensitive that, if the Earth were flat and it was a dark night, a candle’s flame could be seen from 30 miles away.',

    'When Space Invaders was created, Tomohiro Nishikado left in the lag caused by more invaders on the screen in order to create greater difficulty in the games.',

    'The color red doesn’t really make bulls angry; they are color-blind.',

    '65% of autistic kids are left-handed, and only 10% of people, in general, are left-handed.',

    'In 2007, Scotland spent £125,000 devising a new national slogan. The winning entry was: “Welcome to Scotland”.',

    'Until 2016, the “Happy Birthday” song was not for public use. Meaning, prior to 2016, the song was copyrighted and you had to pay a license to use it.',

    'When mice live in the wild, they typically only live for about six months.',

    'There is a punctuation mark used to signify irony or sarcasm that looks like a backwards question mark ⸮',

    'Lettuce is a member of the sunflower family.',

    'Researches have found that flossing your teeth can help your memory. Flossing prevents gum disease, which prevents stiff blood vessels, which cause memory issues.',

    'A cluster of bananas is called a “hand”. Along that theme, a single banana is called a “finger”.',

    'The Hobbit has been published in two editions. In the first edition, Gollum willingly bet on his ring in the riddle game.',

    'For nearly 60 years, Texas didn’t have an official state flag between 1879 & 1933. During that time, the Lone Star flag was the active, but the unofficial flag.',

    'A wildlife technician, Richard Thomas, took the famous tongue twister, “how much wood would a woodchuck chuck if a woodchuck could chuck wood” and calculated a rough estimate of what the answer would actually be. It came out to be around 700 pounds.',

    'Red Solo cups are a common souvenir to bring back from the United States. The novelty comes from the cups being used in many party scenes in movies.',

    'Swedish meatballs originated from a recipe King Charles XII brought back from Turkey in the early 1800s.',

    'Saint Lucia is the only country in the world named after a woman.',

    'Those cute furry bits inside a cat’s ear are called “ear furnishings”. They ensure that dirt doesn’t go inside and also helps them to hear well.',

    'Scientists discovered sharks that are living in an active underwater volcano. Divers cannot investigate because they would get burns from the acidity and heat.',

    'There are times when Pluto is closer to the Sun than Neptune – one of these timelines was from 1979 to 1999.',

    'There is a town in Nebraska called Monowi with a population of one. The only resident is a woman who is the Mayor, Bartender, and Librarian.',

    'The Ethiopian calendar is 7.5 years behind the Gregorian calendar due to the fact that it has 13 months.',

    'In 1994, the company that had a patent on GIFs tried to charge a fee for using GIFS. The PNG was invented as an alternative, and the company backed down.',

    'China is spending $3 billion dollars to build panda-shaped solar farms in order to get more young people interested in renewable energy.',

    'Mercury and Venus are the only two planets in our solar system that do not have any moons.',

    'The average American child is given $3.70 per tooth that falls out.',

    'To properly write adjectives in order, you would list them by amount, value, size, temperature, age, shape, color, origin, and material.',
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  useEffect(() => {
    speakNow('Please Select an option?', 3, 'number').then((result) => {
      setShowVideo(false);
      setAmplitude(0);
    });
  }, []);

  const speakNow = (text, time) => {
    return new Promise((resolve, reject) => {
      Tts.speak(text, {
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
      setTimeout(() => {
        resolve('success');
      }, time * 1000);
    });
  };

  const getJokes = () => {
    axios
      .get('http://61.246.39.136:5001/entertainment?entertainment=joke')
      .then((result) => {
        setTimeout(() => {
          speakNow(result.data.joke, 5).then(() => {
            setShowVideo(false);
            setAmplitude(0);
          });
        }, 1000);
        setShowModal(true);
        setModalContent(
          <React.Fragment>
            <Text style={styles.ente_heading}>Have a Laugh 😄</Text>
            <View style={styles.jokes_container}>
              <ScrollView>
                <Text style={styles.joke_text}>{result.data.joke}</Text>
              </ScrollView>
              <TouchableOpacity
                style={styles.next_button}
                onPress={() => {
                  Tts.stop();
                  getJokes();
                }}>
                <Text style={styles.next_button_text}>Next Joke</Text>
              </TouchableOpacity>
            </View>
          </React.Fragment>,
        );
      })
      .catch((err) => {
        if (err.response) {
          setLoading(false);
          setShowModal(true);
          return (
            <React.Fragment>
              <Text style={styles.try_again_text}>Please try again later</Text>
              <Image
                style={styles.loading_image}
                source={loadingImage}
                alt="loading animation"
              />
            </React.Fragment>
          );
          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          setLoading(false);
          setShowModal(true);
          return (
            <React.Fragment>
              <Text style={styles.try_again_text}>Please try again later</Text>
              <Image
                style={styles.loading_image}
                source={loadingImage}
                alt="loading animation"
              />
            </React.Fragment>
          );
          // client never received a response, or request never left
        } else {
          // anything else
          setLoading(false);
          setShowModal(true);
          return (
            <React.Fragment>
              <Text style={styles.try_again_text}>Please try again later</Text>
              <Image
                style={styles.loading_image}
                source={loadingImage}
                alt="loading animation"
              />
            </React.Fragment>
          );
        }
      });
  };

  const getNews = () => {
    setLoading(true);
    setShowModal(true);
    axios
      .get('http://61.246.39.136:5001/entertainment?entertainment=news')
      .then((result) => {
        console.log('     result     ', result);
        setLoading(false);
        // setTimeout(() => {
        //     speakNow(result.data.news, 20).then(result => {
        //         setShowVideo(false);
        //         setAmplitude(0);
        //     });
        // }, 500);
        setModalContent(
          <React.Fragment>
            <Text style={styles.ente_heading}>Latest News Headlines</Text>
            <ScrollView>
              <View style={styles.news_container}>
                {result.data.news.map((item, index) => {
                  let x = item.substring(item.lastIndexOf('-'));
                  let y = item.substring(item.indexOf(' -'), 0);
                  return (
                    <View style={styles.news_block} key={index}>
                      <Text style={styles.news_text_y}>{y}</Text>
                      <Text style={styles.news_text_x}>{x}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </React.Fragment>,
        );
      })
      .catch((err) => {
        if (err.response) {
          setLoading(false);
          setShowModal(true);
          return (
            <React.Fragment>
              <Text style={styles.try_again_text}>Please try again later</Text>
              <Image
                style={styles.loading_image}
                source={loadingImage}
                alt="loading animation"
              />
            </React.Fragment>
          );
          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          setLoading(false);
          setShowModal(true);
          return (
            <React.Fragment>
              <Text style={styles.try_again_text}>Please try again later</Text>
              <Image
                style={styles.loading_image}
                source={loadingImage}
                alt="loading animation"
              />
            </React.Fragment>
          );
          // client never received a response, or request never left
        } else {
          // anything else
          setLoading(false);
          setShowModal(true);
          return (
            <React.Fragment>
              <Text style={styles.try_again_text}>Please try again later</Text>
              <Image
                style={styles.loading_image}
                source={loadingImage}
                alt="loading animation"
              />
            </React.Fragment>
          );
        }
      });
  };

  const showHoroModal = () => {
    setModalContent(<Horoscopes gethoro={getHoro} />);
    setShowModal(true);
  };

  const getHoro = (sign) => {
    if (typeof sign !== 'undefined') {
      setLoading(true);
      axios
        .post(`http://61.246.39.136:5001//horoscope?horoscope=${sign}`)
        .then((result) => {
          setLoading(false);
          speakNow('This is your horoscope for the day', 4).then((res) => {
            setShowVideo(false);
            setAmplitude(0);
          });
          setShowModal(true);
          setModalContent(
            <React.Fragment>
              <Text style={styles.horo_heading}>{sign.toUpperCase()}</Text>
              <View style={styles.horo_items_container}>
                <View style={styles.horo_items}>
                  <Text style={styles.horo_heading}> Description: </Text>
                  <Text style={styles.horo_content}>
                    {result.data.description}
                  </Text>
                </View>
                <View style={styles.horo_items}>
                  <Text style={styles.horo_heading}> lucky color: </Text>
                  <Text style={styles.horo_content}>
                    {result.data['lucky color']}
                  </Text>
                </View>
                <View style={styles.horo_items}>
                  <Text style={styles.horo_heading}> lucky number: </Text>
                  <Text style={styles.horo_content}>
                    {result.data['lucky number for today']}
                  </Text>
                </View>
                <View style={styles.horo_items}>
                  <Text style={styles.horo_heading}> lucky time: </Text>
                  <Text style={styles.horo_content}>
                    {result.data['lucky time']}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.next_button}
                onPress={() => getHoro()}>
                <Text style={styles.next_button_text}>Try Another</Text>
              </TouchableOpacity>
            </React.Fragment>,
          );
        })
        .catch((err) => {
          if (err.response) {
            setLoading(false);
            setShowModal(true);
            return (
              <React.Fragment>
                <Text style={styles.try_again_text}>
                  Please try again later
                </Text>
                <Image
                  style={styles.loading_image}
                  source={loadingImage}
                  alt="loading animation"
                />
              </React.Fragment>
            );
            // client received an error response (5xx, 4xx)
          } else if (err.request) {
            setLoading(false);
            setShowModal(true);
            return setModalContent(
              <React.Fragment>
                <Text style={styles.try_again_text}>
                  Please try again later
                </Text>
                <Image
                  style={styles.loading_image}
                  source={loadingImage}
                  alt="loading animation"
                />
              </React.Fragment>,
            );
            // client never received a response, or request never left
          } else {
            // anything else
            setLoading(false);
            setShowModal(true);
            return (
              <React.Fragment>
                <Text style={styles.try_again_text}>
                  Please try again later
                </Text>
                <Image
                  style={styles.loading_image}
                  source={loadingImage}
                  alt="loading animation"
                />
              </React.Fragment>
            );
          }
        });
    } else {
      setModalContent(<Horoscopes gethoro={getHoro} />);
    }
  };

  const getFacts = () => {
    // try {
    //     axios.get('http://61.246.39.136:5001/cool_facts').then(result => {
    //         let data = JSON.parse(result.request._response)
    //         setShowModal(true);
    //         setModalContent(
    //             <ScrollView>
    //                 <Text style={styles.facts_heading}>{data.title}</Text>
    //                 <View style={styles.facts_items_container}>
    //                     <View style={styles.facts_items}>
    //                         <Image style={styles.facts_image} source={{ uri: data.url }} />
    //                         <Text style={styles.facts_content}>{data.explanation}</Text>
    //                     </View>
    //                 </View>
    //                 <TouchableOpacity style={styles.next_button} onPress={() => getFacts()}>
    //                     <LinearGradient colors={['#83a4d4', '#43dfe8']}
    //                         start={{ x: 0, y: 0.5 }}
    //                         end={{ x: 1, y: 0.5 }}
    //                         style={styles.linear_button_jokes}>
    //                         <Text style={styles.next_button_text}>Next Fact</Text>
    //                     </LinearGradient>
    //                 </TouchableOpacity>
    //             </ScrollView>
    //         );
    //     });
    // } catch (error) {
    //     setShowModal(true);
    //     return (
    //         setModalContent(<Text style={styles.joke_text}>Please try again later</Text>)
    //     );
    // };
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    setShowModal(true);
    setTimeout(() => {
      speakNow(randomFact, 5).then(() => {
        setShowVideo(false);
        setAmplitude(0);
      });
    }, 1000);
    setModalContent(
      <React.Fragment>
        <Text style={styles.ente_heading}>Here's a random fact for you 🤯</Text>
        <View style={styles.jokes_container}>
          <ScrollView>
            <Text style={styles.joke_text}>{randomFact}</Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.next_button}
            onPress={() => {
              Tts.stop();
              getFacts();
            }}>
            <Text style={styles.next_button_text}>New Fact</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>,
    );
  };

  const closeModal = () => {
    setShowModal(false);
    setAmplitude(false);
    setShowVideo(false);
  };

  const waveStyle = {
    opacity: showVideo ? 1 : 0,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ente_heading}>Buy Your Product</Text>
      {showListening ? (
        <View style={styles.listening_bg}>
          <Image source={listening} alt="Listening" />
        </View>
      ) : null}

      {/* <div style={waveStyle} className='myVideo'>
                <Siriwave style="ios9" amplitude={amplitude} cover={true} />
            </div> */}

      <Modal isVisible={showModal}>
        {loading ? (
          <View style={styles.modal_entertainment}>
            <TouchableOpacity
              onPress={() => {
                Tts.stop();
                closeModal();
              }}>
              <Image style={styles.close_modal} source={cross} alt="X" />
            </TouchableOpacity>
            <Image
              style={styles.loading_image}
              source={loadingImage}
              alt="loading animation"
            />
            <Text style={styles.modal_loading}>Loading...</Text>
          </View>
        ) : (
          <View style={styles.modal_entertainment}>
            {/* <View style={waveStyle} className='myVideo2'>
                            <Siriwave style="ios9" amplitude={amplitude} cover={true} />
                        </View> */}
            <TouchableOpacity
              onPress={() => {
                Tts.stop();
                closeModal();
              }}>
              <Image style={styles.close_modal} source={cross} alt="X" />
            </TouchableOpacity>
            {modalContent}
          </View>
        )}
      </Modal>
      <View style={styles.menu_container}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            Tts.stop();
            navigation.navigate('IphoneMenu');
          }}>
          <View style={styles.container2}>
            <Text style={styles.myButton}>Iphone</Text>
            <View style={styles.menu_images_container1}>
              <Image style={styles.ask_images1} source={Iphone} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={IpadMenu}>
          <View style={styles.container3}>
            <Text style={styles.myButton}>Ipad</Text>
            <View style={styles.menu_images_container2}>
              <Image style={styles.ask_images2} source={Ipad} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={MacMenu}>
          <View style={styles.container3}>
            <Text style={styles.myButton}>Mac</Text>
            <View style={styles.menu_images_container3}>
              <Image style={styles.ask_images3} source={Mac} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={WatchMenu}>
          <View style={styles.container4}>
            <Text style={styles.myButton}>Watches</Text>
            <View style={styles.menu_images_container4}>
              <Image style={styles.ask_images4} source={Watches} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Shoping;

export const Horoscopes = (props) => {
  const getHoroByTouch = (e) => {
    switch (e) {
      case 'aquarius':
        props.gethoro('aquarius');
        break;
      case 'pisces':
        props.gethoro('pisces');
        break;
      case 'aries':
        props.gethoro('aries');
        break;
      case 'taurus':
        props.gethoro('taurus');
        break;
      case 'gemini':
        props.gethoro('gemini');
        break;
      case 'cancer':
        props.gethoro('cancer');
        break;
      case 'leo':
        props.gethoro('leo');
        break;
      case 'virgo':
        props.gethoro('virgo');
        break;
      case 'libra':
        props.gethoro('libra');
        break;
      case 'scorpio':
        props.gethoro('scorpio');
        break;
      case 'sagittarius':
        props.gethoro('sagittarius');
        break;
      case 'capricorn':
        props.gethoro('capricorn');
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Text style={styles.ente_heading}>Check your luck</Text>
      <ScrollView>
        <View style={styles.entertainment_horo_menu}>
          <TouchableOpacity
            onPress={() => getHoroByTouch('aquarius')}
            style={styles.myButton4}
            name="aquarius">
            <LinearGradient
              colors={['#ffd200', '#ff8e00']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Aquarius</Text>
              <Text style={styles.ente_menu_text_2}>Jan 20 - Feb 18</Text>
              <Image
                style={styles.menu_images_ente2}
                source={aquarius}
                alt="jokes"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="pisces"
            onPress={() => getHoroByTouch('pisces')}>
            <LinearGradient
              colors={['#ffa7dc', '#ff3060']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Pisces</Text>
              <Text style={styles.ente_menu_text_2}>Feb 19 - Mar 18</Text>
              <Image
                style={styles.menu_images_ente2}
                source={pisces}
                alt="news"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="aries"
            onPress={() => getHoroByTouch('aries')}>
            <LinearGradient
              colors={['#ade1de', '#9b5ec1']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Aries</Text>
              <Text style={styles.ente_menu_text_2}>Mar 21 - Apr 19</Text>
              <Image
                style={styles.menu_images_ente2}
                source={aries}
                alt="horoscope"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="taurus"
            onPress={() => getHoroByTouch('taurus')}>
            <LinearGradient
              colors={['#0bacbd', '#b2bd0b']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Taurus </Text>
              <Text style={styles.ente_menu_text_2}>Apr 20 - May 20</Text>
              <Image
                style={styles.menu_images_ente2}
                source={taurus}
                alt="weather"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="gemini"
            onPress={() => getHoroByTouch('gemini')}>
            <LinearGradient
              colors={['#c3a794', '#d6d841']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Gemini</Text>
              <Text style={styles.ente_menu_text_2}>May 21 - Jun 20</Text>
              <Image
                style={styles.menu_images_ente2}
                source={gemini}
                alt="clock"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="cancer"
            onPress={() => getHoroByTouch('cancer')}>
            <LinearGradient
              colors={['#ffd200', '#ff8e00']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Cancer</Text>
              <Text style={styles.ente_menu_text_2}>Jun 21 - Jul 22</Text>
              <Image
                style={styles.menu_images_ente2}
                source={cancer}
                alt="information"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="leo"
            onPress={() => getHoroByTouch('leo')}>
            <LinearGradient
              colors={['#ffa7dc', '#ff3060']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Leo</Text>
              <Text style={styles.ente_menu_text_2}>Jul 23 - Aug 22</Text>
              <Image style={styles.menu_images_ente2} source={leo} alt="leo" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="virgo"
            onPress={() => getHoroByTouch('virgo')}>
            <LinearGradient
              colors={['#ffd200', '#ff8e00']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Virgo</Text>
              <Text style={styles.ente_menu_text_2}>Aug 23 - Sept 22</Text>
              <Image
                style={styles.menu_images_ente2}
                source={virgo}
                alt="virgo"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="libra"
            onPress={() => getHoroByTouch('libra')}>
            <LinearGradient
              colors={['#ade1de', '#9b5ec1']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Libra</Text>
              <Text style={styles.ente_menu_text_2}>Sept 23 - Oct 22</Text>
              <Image
                style={styles.menu_images_ente2}
                source={libra}
                alt="libra"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="scorpio"
            onPress={() => getHoroByTouch('scorpio')}>
            <LinearGradient
              colors={['#0bacbd', '#b2bd0b']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Scorpio</Text>
              <Text style={styles.ente_menu_text_2}>Oct 23 - Nov 21</Text>
              <Image
                style={styles.menu_images_ente2}
                source={scorpio}
                alt="facts"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="sagittarius"
            onPress={() => getHoroByTouch('sagittarius')}>
            <LinearGradient
              colors={['#c3a794', '#d6d841']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Sagittarius</Text>
              <Text style={styles.ente_menu_text_2}>Nov 22 - Dec 21</Text>
              <Image
                style={styles.menu_images_ente2}
                source={sagittarius}
                alt="facts"
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.myButton4}
            name="capricorn"
            onPress={() => getHoroByTouch('capricorn')}>
            <LinearGradient
              colors={['#ffd200', '#ff8e00']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.myButton3}>
              <Text style={styles.ente_menu_text_2}>Capricorn</Text>
              <Text style={styles.ente_menu_text_2}>Dec 22 - Jan 19</Text>
              <Image
                style={styles.menu_images_ente2}
                source={capricorn}
                alt="facts"
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};
