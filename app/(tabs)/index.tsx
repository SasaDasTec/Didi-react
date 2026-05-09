import React from 'react';
import { Image } from 'expo-image';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const imagemEtec =
  'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/etec-itanhaem.jpg';

const simboloCps =
  'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/08/cps-logo-identidade.jpg';

const imagemShrek = 'https://pngimg.com/uploads/shrek/shrek_PNG1.png';

export default function TelaPrincipal() {
  return (
    <ScrollView contentContainerStyle={estilos.caixaDaTela}>
      <ImageBackground source={{ uri: imagemEtec }} resizeMode="cover" style={estilos.imagemPrincipal}>
        <View style={estilos.sombraDaImagem}>
          <Text style={estilos.tituloPrincipal}>Etec de Itanhaem</Text>
        </View>
      </ImageBackground>

      <View style={estilos.quadradoBranco}>
        <Image source={{ uri: simboloCps }} style={estilos.simboloCps} contentFit="contain" />
        <Text style={estilos.tituloCurso}>Informatica para Internet</Text>
      </View>

      <Image source={{ uri: imagemShrek }} style={estilos.imagemShrek} contentFit="contain" />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  caixaDaTela: {
    alignItems: 'center',
    backgroundColor: '#e9f2ec',
    gap: 22,
    padding: 18,
    paddingBottom: 36,
  },
  imagemPrincipal: {
    height: 260,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    width: '100%',
  },
  sombraDaImagem: {
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  tituloPrincipal: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
  },
  quadradoBranco: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#d8d8d8',
    borderRadius: 6,
    borderWidth: 1,
    padding: 22,
    width: '100%',
  },
  simboloCps: {
    height: 88,
    marginBottom: 12,
    width: 220,
  },
  tituloCurso: {
    color: '#8b1111',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtituloCurso: {
    color: '#444444',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
  },
  imagemShrek: {
    height: 300,
    width: '100%',
  },
});
