import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const TIMES = [
  { id: 'abc123',
   nome: 'Clube Náutico Capinbaribe',
   fundacao:'7 de abril de 1901',
   quant_titulos: '23 títulos estaduais',
   divisao: 'Série B',
   cores:'Vermelho e Branco',
   image: require('./assets/nautico.jpg'),
  },
  { id: 'def456',
   nome: 'São Paulo',
   fundacao:'25 de janeiro de 1930',
   quant_titulos: '21 títulos estaduais',
   divisao: 'Série A',
   cores:'Vermelho, Branco e Preto',
   image: require('./assets/saopaulo.png'),
  },
  { id: 'ghi789',
   nome: 'Flumense',
   fundacao:'21 de julho de 1902',
   quant_titulos: '31 títulos estaduais',
   divisao: 'Série A',
   cores:'Branco, Bordô e Verde',
   image: require('./assets/fluminense.png'),
  },
  { id: 'jkl101112',
   nome: 'Internacional',
   fundacao:'04 de abril de 1909',
   quant_titulos: '45 títulos estaduais',
   divisao: 'Série A',
   cores:'Vermelho e Branco',
   image: require('./assets/internacional.png'),
  },
  { id: 'mno131415',
   nome: 'Cruzeiro',
   fundacao:'02 de janeiro de 1921',
   quant_titulos: '38 títulos estaduais',
   divisao: 'Série B',
   cores:'Azul e Branco',
   image: require('./assets/cruzeiro.png'),
  },
  { id: 'pqr161718',
   nome: 'Fotaleza',
   fundacao:'18 de outubro de 1918',
   quant_titulos: '44 títulos estaduais',
   divisao: 'Série A',
   cores:'Branco, Vermelho e Azul',
   image: require('./assets/fortaleza.png'),
  },
  { id: 'stu192021',
   nome: 'Santos',
   fundacao:'14 de abril de 1912',
   quant_titulos: '22 títulos estaduais',
   divisao: 'Série A',
   cores:'Preto e Branco',
   image: require('./assets/santos.png'),
  },
  
];



const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
    <Text style={styles.nome}>{item.nome}</Text>
    <Text style={styles.fundacao}>{item.fundacao}</Text>
    <Text style={styles.quant_titulos}>{item.quant_titulos}</Text>
    <Text style={styles.divisao}>{item.divisao}</Text>
    <Text style={styles.cores}>{item.cores}</Text>
    <Image source={item.image}/>
  </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TIMES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fc0052',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  nome: {
    fontSize: 32,
  },
});

export default App;