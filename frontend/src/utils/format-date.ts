export function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  return `${day} ${aylar[parseInt(month) - 1]} ${year}`;
}