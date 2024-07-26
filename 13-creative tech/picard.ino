#include <OneWire.h>
#include <DallasTemperature.h>
#include <Wifi.h>

#define ONE_WIRE_BUS 23
#define BUZZER_PIN 25
#define GREEN_LED_PIN 26
#define RED_LED_PIN 27

OneWire OneWire(ONE_WIRE_BUS);

DallasTemperature sensors(&OneWire);

const char* ssid = "your_ssid";
const char* password = "your_password";

const float MIN_TEMP = -18.0;
const float MAX_TEMP = -15.0;

void setup() {
    Serial.begin(115200);
    sensors.begin();

    pinMode(BUZZER_PIN, OUTPUT);
    pinMode(GREEN_LED_PIN, OUTPUT);
    pinMode(RED_LED_PIN, OUTPUT);

    Wifi.begin(ssid, password);
    while (Wifi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi");
}

void loop() {
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);

  Serial.print("Current temperature: ");
  Serial.println(temperature);
  
  if (temperature < MIN_TEMP || temperature > MAX_TEMP) {
    digitalWrite(RED_LED_PIN, HIGH);
    digitalWrite(GREEN_LED_PIN, LOW);
    tone(BUZZER_PIN, 1000); 


    sendAlert(temperature);
  } else {
    digitalWrite(RED_LED_PIN, LOW);
    digitalWrite(GREEN_LED_PIN, HIGH);
    noTone(BUZZER_PIN); 
  }
  
  delay(5000); 
}

void sendAlert(float temp) {


  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    const char* server = "your_server_address";
    if (client.connect(server, 80)) {
      client.print("GET /alert?temperature=");
      client.print(temp);
      client.println(" HTTP/1.1");
      client.println("Host: your_server_address");
      client.println("Connection: close");
      client.println();
    }
  }
}