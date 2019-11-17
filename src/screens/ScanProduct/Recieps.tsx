import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'react-native-check-box';

import RoundedButton from 'components/Buttons/RoundedButton';
import RegularButton from 'components/Buttons/RegularButton';
import {FlatList} from 'react-native-gesture-handler';

export default class ReciepsScreen extends React.Component {
  readonly state = {};

  static navigationOptions = {
    title: 'Reciept for YOU ❤️',
  };

  renderProductItem = ({item, index}) => (
    <View>
      <View
        key={index}
        style={{
          borderBottomColor: 'rgba(0, 0, 0, 0.1)',
          borderBottomWidth: 1,
          paddingVertical: 18,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{flex: 1}}>{item.Name}</Text>
        <Text>{item.PreparationTime.Description}</Text>
      </View>
      <View>
        <Text>{item.Description}</Text>
        <Image
          source={{
            uri: images[0],
          }}
          style={{width: '100%', height: 100}}
        />
        <Text>{item.Instructions}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={this.renderProductItem}
          keyExtractor={item => item.Name}
        />
      </View>
    );
  }
}

const products = [
  {
    Name: 'Juustotarjotin',
    PreparationTime: {
      Description: 'yli 60 min',
      TimeRange: {
        MinTime: 60,
      },
    },
    PictureUrls: [
      {
        Id: 'juustotarjotin_6_19',
        Normal:
          'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10587?w=1000&h=1000&fit=clip',
        Original: 'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10587',
      },
    ],
    Instructions:
      '# Tee piimäjuusto. Kiehauta maito kattilassa. Sekoita munat, kermaviili, piimä kulhossa. Mausta halutessasi vaniljasokerilla. Lisää seos kuumaan maitoon rauhallisesti, sekoita vain hetki. Kiehauta ja kytke lämpö pois. Anna seoksen levätä kannen alla noin 30 minuuttia, kunnes juustomassa on erottunut.\r\n# Asettele harsoliina siivilään tai läviköön ja nosta kulhon päälle. Nostele juustomassa toisella siivilällä liinan päälle. Sekoita suola tasaisesti massaan. Annan juuston jäähtyä hetki. Kiepauta liinan liepeet nyytiksi niin, että juusto saa pallon muodon. Nosta juusto jääkaappiin valumaan vähintään 2 tunniksi.\r\n# Paahda vuohenjuusto. Laita juusto uunivuokaan ja sivele 1 rkl:lla hunajaa. Kypsennä 225-asteisessa uunissa 10 minuuttia, lisää pähkinät vuokaan puolivälissä. Nosta vuohenjuusto tarjolle. Laita paahdettuja pähkinöitä, karpaloita ja hunajaa päälle. Loput pähkinät ja karpalot voit laittaa kippoihin tarjolle.\r\n# Kokoa juustotarjottimelle myös muita haluamiasi tarjottavia, kuten siemennäkkäriä, crostineja, ilmakuivattua kinkkua, taateleita ja paloiteltuja hedelmiä.',
    EndNote:
      'Vinkki! Voit jäähdyttää tai pakastaa yli jäävän heran ja käyttää leipätaikinaan tai smoothieen. *Annoshinnat on laskettu K-citymarket-ketjun hintatason mukaan 10/2019. Tuoretuotteiden hinnat vaihtelevat sesongeittain.',
    Description:
      'Itse tehty juustotarjotin on juhlien vau-tarjottava. Trendikkääksi päivitetty piimäjuusto valmistuu yllättävän helposti, ja muut herkut nostat tarjolle vielä näpsemmin. Noin 2,70 €/annos*',
    DateCreated: '2019-09-05T10:41:03',
  },
  {
    Name: 'Vihreät kuulat-kakku',
    PreparationTime: {
      Description: 'yli 60 min',
      TimeRange: {
        MinTime: 60,
      },
    },
    PictureUrls: [
      {
        Id: 'vihreakuulakakk_PI12_19',
        Normal:
          'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10583?w=1000&h=1000&fit=clip',
        Original: 'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10583',
      },
    ],
    Instructions:
      '# Vaahdota voi ja fariinisokeri sähkövatkaimella. Sekoita muna taikinaan. Lisää hyvin pestyn sitruunan kuori ja mehu. Lisää keskenään sekoitetut kuivat aineet, vatkaa vain vähän.\r\n# Pingota leivinpaperi irtopohjavuoan (halk. 24 cm) pohjan ja reunan väliin. Levitä taikina vuokaan.\r\n# Paista kakkua 175-asteisessa uunissa noin 20 minuuttia, keskiosa saa jäädä hieman pehmeäksi. Anna jäähtyä täysin.\r\n# Valmista kuorrutus vatkaamalla kaikki kuorrutteen ainekset keskenään sähkövatkaimella kuohkeaksi kreemiksi. Irrota kakku vuoasta tarjoilulautaselle ja levitä kuorrute kakulle.\r\n# Leikkaa vihreät kuulat puoliksi ja irrota palat toisistaan niin, että saat neljä lohkoa. Asettele vihreät kuulat kuorrutteen päälle kuvan mukaisella tavalla.\r\n# Kakku on parhaimmillaan huoneenlämpöisenä. Yli jäänyt kakku säilyy jääkaapissa muutaman päivän.',
    EndNote: '',
    Description:
      'Vihreät kuulat-kakku on joulun hitti! Helppo kakkutaikina valmistuu vain vatkaamalla ainekset keskenään. Maku on raikkaan sitruunainen.',
    DateCreated: '2019-09-02T08:26:03',
  },
  {
    Name: 'Porkkanalaatikko ilman riisiä',
    PreparationTime: {
      Description: 'yli 60 min',
      TimeRange: {
        MinTime: 60,
      },
    },
    PictureUrls: [
      {
        Id: 'porkkanalaatik_KR6_19',
        Normal:
          'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10576?w=1000&h=1000&fit=clip',
        Original: 'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10576',
      },
    ],
    Instructions:
      '# Kuori ja lohko porkkanat. Keitä porkkanat vähässä vedessä, kannen alla täysin pehmeiksi, 30-40 minuuttia. Valuta porkkanat ja anna jäähtyä haaleiksi.\r\n# Lisää kerma porkkanoiden joukkoon ja soseuta sauvasekoittimella samattiseksi. Lisää munat ja mausteet soseeseen. Tarkista maku.\r\n# Voitele uunivuoka 1 rkl:lla voita. Kaada sose vuokaan. Ripottele mantelijauhe päälle ja tee lusikalla aaltokuvio pintaan. Lisää loppu voi nokareina vuokaan.\r\n# Kypsennä laatikkoa 175-asteisessa uunissa noin 1,5 tuntia, kunnes pinta on kauniin ruskistunut.',
    EndNote: '',
    Description:
      'Porkkanalaatikko onnistuu myös ilman riisiä. Laatikko tehdään hieman lanttulaatikon tyyliin. Lämmittävänä mausteena on muskottia ja ripaus kardemummaa.',
    DateCreated: '2019-08-28T13:59:58',
  },
  {
    Name: 'Jauhelihapasteijat',
    PreparationTime: {
      Description: 'yli 60 min',
      TimeRange: {
        MinTime: 60,
      },
    },
    PictureUrls: [
      {
        Id: 'Jauhelihapasteij_KR6_19',
        Normal:
          'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10575?w=1000&h=1000&fit=clip',
        Original: 'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10575',
      },
    ],
    Instructions:
      '# Sekoita rahka ja voi kulhossa. Lisää jauhot, leivinjauhe ja suola. Sekoita nopeasti tasaiseksi, niin sitkoa ei ehdi muodostua. Muotoile taikina suorakaiteeksi ja kääri tuorekelmuun. Laita taikina kovettumaan vähintään 2 tunniksi jääkaappiin tai pakastimeen noin tunniksi.\r\n# Keitä riisi kypsäksi. Hienonna sipuli ja valkosipuli.\r\n# Kuumenna öljy paistinpannussa. Ruskista jauheliha. Lisää sipuli ja valkosipuli ja kypsennä muutama minuutti, kunnes sipuli on pehmennyt. Sekoita mausteet joukkoon.\r\n# Yhdistä riisi ja jauheliha. Anna jäähtyä haaleaksi. Lisää sitten raaka muna joukkoon. Se sitoo täytteen ja pasteijoiden täyttäminen on helpompaa.\r\n# Kauli kylmä taikina muutaman millin paksuiseksi suorakaiteen malliseksi levyksi. Voit myös jakaa taikinan kahtia, laita toinen puoli jääkaappiin odottamaan. Leikkaa levy neliön muotoisiksi (10 cm  x 10 cm) paloiksi. Jaa täyte paloille. Sivele reunat vedellä ja taita kolmion muotoon. "Liimaa" reunat haarukalla painellen.\r\n# Nosta pasteijat uunipellille leivinpaperin päälle. Voitele pinta munalla ja pistele haarukalla.\r\n# Paista pasteijat 225-asteisessa uunissa 12-15 minuuttia, kunnes ne ovat kullanruskeita ja kypsiä.',
    EndNote: 'Vinkki! Voit tehdä pasteijat myös valmiista lehtitaikinasta.',
    Description:
      'Jauhelihapasteijat ovat joulun klassikko. Rapeat piiraset maistuvat myös muissa juhlissa. Tee rahka-voitaikina itse tai oikaise valmiilla lehtitaikinalla.',
    DateCreated: '2019-08-28T12:43:12',
  },
];

const images = ['https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10587',
    'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10583',
    'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10576',
    'https://k-file-storage-qa.imgix.net/f/k-ruoka/recipe/10575',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 18,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: (Dimensions.get('screen').height / 100) * 27,
    maxHeight: 180,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 22,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
  cardSubheading: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
});
