import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExemploFlexbox() {
  return (
    // A View principal que age como a "caixa de papelão"
    <View style={styles.telaInteira}>
      <Text style={styles.titulo}>Entendendo o Flexbox</Text>
     
      {/* O container onde a mágica do layout acontece */}
      <View style={styles.containerFlex}>
        <View style={[styles.caixinha, { backgroundColor: '#3b82f6' }]}>
          <Text style={styles.textoCaixa}>1</Text>
        </View>
        <View style={[styles.caixinha, { backgroundColor: '#10b981' }]}>
          <Text style={styles.textoCaixa}>2</Text>
        </View>
        <View style={[styles.caixinha, { backgroundColor: '#f59e0b' }]}>
          <Text style={styles.textoCaixa}>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  telaInteira: {
    flex: 1, // Ocupa 100% da tela do celular
    backgroundColor: '#f8fafc',
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0f172a'
  },
  containerFlex: {
    flex: 1,

    flexDirection: 'row',
   
    justifyContent: 'space-around',
   
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    margin: 10,
    borderRadius: 10,
  },
  caixinha: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textoCaixa: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});