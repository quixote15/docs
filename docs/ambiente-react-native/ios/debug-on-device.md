---
id: debug-on-device
title: Debugando o aplicativo no dispositivo físico
sidebar_label: Debug on Device
---


![Xcode](assets/ambiente-react-native/macOS.png)

Para configurar o ambiente de iOS no dispositivo físico (Iphone5, 6, 7 ..X) é preciso ter uma conta de desenvolvimento (Apple’s Member Center)[https://developer.apple.com/]. 

Para executar um projeto react native em um dispositivo fisico os seguintes passos devem ser seguidos:

1. Registrar o dispositivo para desenvolvimento
2. Adicionar o disposito ao programa de provisionamento de profile
3. Executar o projeto

# 1. Registrando o dispositivo

As aplicações que desenvolvemos só podem ser testadas em dispositivos que possuem um profile registrado na conta de desenvolvimento. 

Para registrar o dispositivo é preciso ter em maos o UDID dele. 


### 1.1 Localizando UDID usando o iTunes

1. Connecte o dispositivo no seu computador Mac com o cabo USB.

2. Abra o iTunes.

3. Selecione seu dispositivo

![Itunes devices](assets/ambiente-react-native/itunes-select-device.png)

![UDID device](assets/ambiente-react-native/itunes-udid.png)

Agora copie, COMMAND-C (on Mac), o UDID.


# 2 Adicionando dispositivo ao Provisioning Profile da Apple

Abra o site de desenvolvedores da apple e entre a conta que com privilégios de admin da empresa. 

- developer.apple.com/ios/manage/devices/index.action

Na pagina Member Center, clique 'Certificates, Identifiers & Profiles', e depois clique em  'Devices > All'.


- Clique no ícone '+' para  Registrar um novo Dispositivo.

- Coloque o nome e UDID do dispositivo.

- Depois é o padrão next next de todo formulário :)


Depois disso, seu dispositivo estará registrado mas ainda existe mais um passo. Vá aba 'Profiles' e clique no ícone '+' para criar um novo profile e selecione todos os dispositivos que poderam executar esse profile.

Depois disso, clique em 'generate' e faça o download do profile.

# 3. Executando o projeto react native

Abra o projeto ios com o XCode com seu dispositivo IOS conectado via USB. È só abrir a pasta `ios` em seu projeto react native, e clicar duas vezes no arquivo `.xcodeproj`, ou se você estiver usando cocoapods o arquivo `.xcworkspace`.

### 3.1 Configure o code signing


Selecione seu projeto na aba de projetos do XCode, depois selecione seu projeto alvo ou `main target` (normalmente terá o mesmo nome de seu projeto). Procure pela aba "General".  Vá para a secção "Signing" e certifique-se que sua conta de desenvolvimento Apple ou a conta de seu time está selecionada no `Team Dropdown`. Faça o mesmo pra o testes `tests target` .

![](/react-native/docs/assets/RunningOnDeviceCodeSigning.png)



### 3.2 Build/Run

Se tudo estiver correto seu dispositivo será listado na barra de ferramentas do XCode e você poderá clicar em `Run/Build`.

Pode ser que o XCode peça sua senha de usuário MAC para continuar.
https://stackoverflow.com/questions/46774005/codesign-wants-to-access-key-access-in-your-keychain-i-put-in-my-login-passwo

Nesse passo aconteceu um problema ao realizar o build que resolvi com o seguinte video.

https://www.youtube.com/watch?v=m3jST08imY0


# Referencias

https://support.smartbear.com/testcomplete/docs/app-testing/mobile/ios/preparing/getting-udid.html

https://facebook.github.io/react-native/docs/running-on-device

