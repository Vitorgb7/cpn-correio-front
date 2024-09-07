import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Button, View, Text } from 'react-native';

interface FormData {
  item: string;
  conteudo: string;
  quantidade: string;
  pesoTotal: string;
  totais: string;
}

export default function TabTwoScreen() {
  const [formData, setFormData] = useState<FormData>({
    item: '',
    conteudo: '',
    quantidade: '',
    pesoTotal: '',
    totais: '',
  });

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      {/* Substituir a imagem abaixo pela imagem dos Correios */}
      <Image source={require('@/assets/images/correios.png')} style={styles.image} />
      
      <Text style={styles.label}>Item</Text>
      <TextInput
        style={styles.input}
        value={formData.item}
        onChangeText={(value) => handleInputChange('item', value)}
        placeholder="Digite o item"
      />

      <Text style={styles.label}>Conteúdo</Text>
      <TextInput
        style={styles.input}
        value={formData.conteudo}
        onChangeText={(value) => handleInputChange('conteudo', value)}
        placeholder="Digite o conteúdo"
      />

      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        value={formData.quantidade}
        onChangeText={(value) => handleInputChange('quantidade', value)}
        placeholder="Digite a quantidade"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Peso Total</Text>
      <TextInput
        style={styles.input}
        value={formData.pesoTotal}
        onChangeText={(value) => handleInputChange('pesoTotal', value)}
        placeholder="Digite o peso total"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Altura + Largura + Profundiade</Text>
      <TextInput
        style={styles.input}
        value={formData.totais}
        onChangeText={(value) => handleInputChange('totais', value)}
        placeholder=""
        keyboardType="numeric"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 80,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 40
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});