import react from 'react';
import StyledMain from './styleds';
import CardText from '../cardText/CardText';
import ImgCard from '../imgCard/ImgCard';

function Main({ children }) {
  return (
    <>
      <StyledMain>
        <CardText>
          <p>
            Webtwo ipsum sococo kno ning gooru, disqus. Greplin hulu mobly jajah heroku klout
            flickr, oooj orkut jabber zoodles. Bebo zooomr airbnb doostang dogster boxbe, oooooc
            yuntaa quora divvyshot. Jiglu ning klout imeem, trulia koofers. Cuil knewton udemy
            ideeli, flickr. Doostang bitly skype squidoo dopplr plugg rovio, bubbli lanyrd koofers
            omgpop reddit, elgg yammer ideeli kippt imvu. Mozy udemy joukuu, jaiku. Diigo spotify
            gsnap dogster, ebay. Joukuu boxbe edmodo grockit plickers mozy lanyrd vimeo, voxy joost
            squidoo chegg prezi divvyshot. Diigo joost twones reddit, tumblr doostang. Geni plaxo
            plugg imeem tivo oovoo palantir ifttt, ngmoco zillow odeo qeyno cloudera . Foodzie spock
            lala eskobo, lanyrd kazaa. Grockit handango imeem, fleck.
          </p>
        </CardText>
        <ImgCard>
          <img
            src="https://jovemnerd.com.br/wp-content/uploads/2021/11/camera-como-escolher-o-seu-celular-black-friday-nerdbunker-760x570.jpg"
            alt="Cell"
          />
        </ImgCard>
      </StyledMain>
      <StyledMain>
        <ImgCard>
          <img
            src="https://startupi.com.br/wp-content/uploads/2020/04/desenvolvimento-low-code.jpeg"
            alt=""
          />
        </ImgCard>
        <CardText>
          <p>
            Doostang oooooc bitly balihoo bitly dogster, sifteo jibjab bebo voki. Tivo vuvox airbnb,
            omgpop. Vimeo zlio grockit knewton, tivo bebo. sifteo. Heekya palantir prezi, mzinga.
            Boxbe revver reddit jajah, mzinga. kosmix airbnb glogster. akismet. Trulia jaiku edmodo
            klout jumo yoono, oooooc wufoo divvyshot blyve.
          </p>
        </CardText>
      </StyledMain>
      <StyledMain>
        <CardText>
          <p>
            Heroku reddit akismet groupon boxbe, gsnap foodzie elgg zanga joukuu, shopify kazaa
            empressr. Ngmoco jumo squidoo zappos akismet, plickers bitly tumblr. divvyshot revver
            koofers. Diigo ideeli octopart twitter flickr zillow edmodo tumblr meevee, babblely
            trulia blekko handango kippt zoosk. Handango xobni kazaa yoono ngmoco , xobni ebay.
            groupon handango. Zappos yuntaa bubbli lanyrd cuil, skype wesabe meebo, meevee zanga
            mobly. Greplin geni mobly sococo koofers zimbra, zooomr blippy cotweet doostang . Woopra
            foodzie jabber imvu oooj joukuu jibjab, flickr zinch squidoo groupon. Glogster vimeo
            zynga skype spotify, airbnb convore kaboodle. wikia sifteo. Hulu odeo edmodo joost, imvu
            zinch.
          </p>
        </CardText>
        <ImgCard>
          <img
            src="https://cangurunews.com.br/wp-content/uploads/2020/07/imagem-correta-696x464.jpg"
            alt=""
          />
        </ImgCard>
      </StyledMain>
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Main;
