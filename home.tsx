import { Image } from 'expo-image';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const imagemEtec =
  'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/etec-itanhaem.jpg';
const simboloCps =
  'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/08/cps-logo-identidade.jpg';
const imagemShrek = 'https://pngimg.com/uploads/shrek/shrek_PNG1.png';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={{ uri: imagemEtec }} resizeMode="cover" style={styles.headerImage}>
        <View style={styles.imageOverlay}>
          <Text style={styles.schoolName}>Etec de Itanhaém</Text>
        </View>
      </ImageBackground>

      <View style={styles.card}>
        <Image source={{ uri: simboloCps }} style={styles.cpsLogo} contentFit="contain" />
        <Text style={styles.title}>Informatica para Internet</Text>
        <Text style={styles.subtitle}>Bem-vindo ao app</Text>
      </View>

      <Image source={{ uri: imagemShrek }} style={styles.shrekImage} contentFit="contain" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e9f2ec',
    gap: 20,
    padding: 18,
    paddingBottom: 36,
  },
  headerImage: {
    height: 260,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    width: '100%',
  },
  imageOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  schoolName: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#d8d8d8',
    borderRadius: 6,
    borderWidth: 1,
    padding: 22,
    width: '100%',
  },
  cpsLogo: {
    height: 88,
    marginBottom: 12,
    width: 220,
  },
  title: {
    color: '#8b1111',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#444444',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  shrekImage: {
    height: 300,
    width: '100%',
  },
});
