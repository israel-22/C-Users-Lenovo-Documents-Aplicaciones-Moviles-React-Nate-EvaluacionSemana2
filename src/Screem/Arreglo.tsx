import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Arreglo: React.FC = () => {
  // Estado para almacenar los números y los arreglos separados
  const [numeros] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [numerosPares, setNumerosPares] = useState<number[]>([]);
  const [numerosImpares, setNumerosImpares] = useState<number[]>([]);

  // Función para dividir los números en pares e impares
  const separarNumeros = () => {
    const pares: number[] = [];
    const impares: number[] = [];
    numeros.forEach(numero => {
      if (numero % 2 === 0) {
        pares.push(numero);
      } else {
        impares.push(numero);
      }
    });
    setNumerosPares(pares);
    setNumerosImpares(impares);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Números Pares e Impares</Text>
      <Text>...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]...</Text>
      <Button title="Separar Números" onPress={separarNumeros} />
      <Text style={styles.subheader}>Números Pares:</Text>
      <Text>{numerosPares.join(', ')}</Text>
      <Text style={styles.subheader}>Números Impares:</Text>
      <Text>{numerosImpares.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});


