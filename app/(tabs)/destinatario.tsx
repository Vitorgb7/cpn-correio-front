import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Button, View, Text, ScrollView } from 'react-native';

interface FormData {
  nome: string;
  endereco: string;
  cidade: string;
  cep: string;
  uf: string;
  cpfCnpj: string;
}

export default function TabThreeScreen() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    uf: '',
    cpfCnpj: '',
  });

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Aqui você pode adicionar o comportamento de submissão do formulário
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Substituir a imagem abaixo pela imagem dos Correios */}
        <Image source={require('@/assets/images/correios.png')} style={styles.image} />

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={formData.nome}
          onChangeText={(value) => handleInputChange('nome', value)}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={formData.endereco}
          onChangeText={(value) => handleInputChange('endereco', value)}
          placeholder="Digite seu endereço"
        />

        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          value={formData.cidade}
          onChangeText={(value) => handleInputChange('cidade', value)}
          placeholder="Digite sua cidade"
        />

        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          value={formData.cep}
          onChangeText={(value) => handleInputChange('cep', value)}
          placeholder="Digite seu CEP"
          keyboardType="numeric"
        />

        <Text style={styles.label}>UF</Text>
        <TextInput
          style={styles.input}
          value={formData.uf}
          onChangeText={(value) => handleInputChange('uf', value)}
          placeholder="Digite seu UF"
          maxLength={2}
        />

        <Text style={styles.label}>CPF/CNPJ</Text>
        <TextInput
          style={styles.input}
          value={formData.cpfCnpj}
          onChangeText={(value) => handleInputChange('cpfCnpj', value)}
          placeholder="Digite seu CPF ou CNPJ"
          keyboardType="numeric"
        />

        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
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
    marginTop: 40,
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