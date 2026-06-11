export const categories = ['Tümü', '0-7m³', '7-10m³', '10m³ Üzeri', '17m³ Üzeri', 'Kasalı Araç'];

export interface Product {
  id: string;
  model: string;
  series: string;
  category: string;
  volume: string;
  voltage: string;
  temp: string;
  capacity: string;
  shortDesc: string;
  image: string;
  detailImage: string;
  altText: string;
  installLocation: string;
  airflow: string;
  vehicles: string[];
}

export const products: Product[] = [
  {
    id: 'gns1-e',
    model: 'GNS1-E',
    series: 'GNS1 Serisi',
    category: '0-7m³',
    volume: '0 - 7 m³',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Verimli Soğutma',
    shortDesc: 'Sanal market araçları için önerilir. 0-7 m³ gibi araçlar için ideal çözüm.',
    image: "https://www.image2url.com/r2/default/images/1777103295975-3b1ae71c-d89f-48d0-aa82-e555a9ee02a1.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777104457466-327c3cbb-f190-4c7e-ae5e-c98d15c03527.png",
    altText: "Sanal market araçları ve hafif ticari araçlar için elektrikli frigo soğutucu",
    installLocation: 'Araç Tavanı',
    airflow: 'Optimize Edilmiş Fan Sistemi',
    vehicles: ['Sanal Market Araçları', 'Fiorino', 'Courier', 'Minivan', 'Doblo', 'Combo'],
  },
  {
    id: 'gns2-e',
    model: 'GNS2-E',
    series: 'GNS2 Serisi',
    category: '0-7m³',
    volume: '0 - 7 m³',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: '1750 W / 1300 W',
    shortDesc: 'Kompakt hacimli araçlar için güvenilir soğutma çözümü.',
    image: "https://www.image2url.com/r2/default/images/1776865949894-17b28fc7-8ea2-4c44-9aaf-6e54038e201c.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777031119435-36e364a4-e9eb-4dd5-b7c9-e57d7e6fbf33.png",
    altText: "Doblo frigo, Berlingo frigo ve Scudo frigo uyumlu yüksek kaliteli elektrikli frigo soğutucu montajlı araç",
    installLocation: 'Araç Tavanı',
    airflow: '750 m³/h',
    vehicles: ['Doblo', 'Berlingo', 'Caddy', 'Scudo', 'Combo', 'Kangoo', 'Trafic'],
  },
  {
    id: 'gns3-series',
    model: 'GNS3-E | GNS3D-E',
    series: 'GNS3 SERİSİ',
    category: '7-10m³',
    volume: '7 - 10 m³',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Yüksek Verimli',
    shortDesc: 'Soğuk muhafaza (+4 °C) ve donmuş muhafaza (-18 °C) uygulamaları için.',
    image: "https://www.image2url.com/r2/default/images/1776835282859-d51eb150-e2ce-4545-81c8-c2c9a5839769.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777031186165-0da676d5-9bf0-4cc1-9a31-36b820457848.jpeg",
    altText: "Custom frigo ve orta boy ticari araçlar için frigofirik izolasyon ve elektrikli araç frigo soğutucu sistemi",
    installLocation: 'Araç Tavanı',
    airflow: 'Yüksek Performans',
    vehicles: ['Custom', 'Transporter', 'Vito', 'Expert', 'Jumpy', 'Trafic'],
  },
  {
    id: 'gns4-series',
    model: 'GNS4-E | GNS4D-E',
    series: 'GNS4 SERİSİ',
    category: '10m³ Üzeri',
    volume: '10 m³\'ten Büyük',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Güçlü Verim',
    shortDesc: '10 m³\'ten büyük araçlar için tasarlanmış, güçlü ve verimli elektrikli frigo çözümü.',
    image: "https://www.image2url.com/r2/default/images/1776835318541-e497ccbe-4405-436a-8779-8ab394023559.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777031227298-eea0a2dd-0b1e-4b9e-ba33-272187c39e7d.png",
    altText: "Transit frigo ve panelvan kasalar için tasarlanmış profesyonel frigorifik araç soğutucusu ve frigo sistemleri",
    installLocation: 'Araç Tavanı',
    airflow: 'Çift Fanlı Sistem',
    vehicles: ['Transit', 'Ducato', 'Boxer', 'Jumper', 'Master', 'Crafter'],
  },
  {
    id: 'gns4k-e',
    model: 'GNS4K-E',
    series: 'GNS4K SERİSİ',
    category: 'Kasalı Araç',
    volume: '10 m³\'ten Büyük',
    voltage: 'DC 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Güçlü Verim',
    shortDesc: 'Kasalı araçlar için önerilir. 10 m³\'ten büyük araçlar için güçlü ve verimli elektrikli frigo.',
    image: "https://www.image2url.com/r2/default/images/1777098086730-a789a136-0631-4cbd-81b4-66ceca85d560.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777104870123-1e1305d7-1c22-4311-a943-69e9936f97ea.png",
    altText: "Kasalı araçlar için tasarlanmış profesyonel frigorifik araç soğutucusu ve frigo sistemleri",
    installLocation: 'Kasa Üzeri',
    airflow: 'Çift Fanlı Sistem',
    vehicles: ['Kasalı Araçlar', 'Kamyonetler'],
  },
  {
    id: 'gns5-series',
    model: 'GNS5-E | GNS5D-E',
    series: 'GNS5 SERİSİ',
    category: '17m³ Üzeri',
    volume: '17 m³ ve Üzeri',
    voltage: 'DC 12 V / 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Maksimum Güç',
    shortDesc: 'İster Panelvan ister Kasalı araç, tüm konfigürasyonlarda üstün performans sunar.',
    image: "https://www.image2url.com/r2/default/images/1777386190198-0bea56bf-fc17-49b4-b6d2-c290eb000226.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777107404021-7aafcc6f-3c02-4e20-bbb8-442914f236a5.png",
    altText: "Frigo kasa ve geniş hacimli araçlar için üstün performanslı endüstriyel elektrikli frigo ve araç frigo üniteleri",
    installLocation: 'Araç Tavanı veya Kasa Üzeri',
    airflow: 'Maksimum Performans',
    vehicles: ['Daily', 'Sprinter', 'Crafter', 'Kasalı Araçlar'],
  },
  {
    id: 'gns5k-e',
    model: 'GNS5K-E',
    series: 'GNS5K SERİSİ',
    category: 'Kasalı Araç',
    volume: '17 m³ ve Üzeri',
    voltage: 'DC 24 V',
    temp: '+4°C / -18°C',
    capacity: 'Maksimum Güç',
    shortDesc: 'Kasalı araçlar için önerilir. Tüm konfigürasyonlarda üstün performans sunar.',
    image: "https://www.image2url.com/r2/default/images/1776835536179-74aa4c30-e5f8-4dc9-a3b8-6da41ed81c5b.png",
    detailImage: "https://www.image2url.com/r2/default/images/1777105096056-00cdfc42-355a-4316-a0dc-019f3a014a99.png",
    altText: "Büyük kasalı araçlar için üstün performanslı endüstriyel elektrikli frigo ve araç frigo üniteleri",
    installLocation: 'Kasa Üzeri',
    airflow: 'Maksimum Performans',
    vehicles: ['Büyük Kasalı Araçlar', 'Kamyonlar'],
  }
];

