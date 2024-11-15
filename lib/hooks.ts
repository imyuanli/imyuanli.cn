export const useGenerateRandomColor = () => {
  const colors: any = [
    '45deg,#c7a9c4,#fda3b4,#ffab7d,#f5cd41',
    '90deg,#d595ee,#ffbcb7,#f0eee9',
    '90deg,#cbaec6,#acb6e4,#62c5ee,#1acfcc',
    '90deg,#fee1e9,#edd5e1,#aed0db',
    '90deg,#c7bd8b,#c1d160,#99e93a',
    '90deg, #ed70a4,#e39abf,#dabed0',
    '270deg,#fff5f5,#ffa8b4',
    '90deg,#9cc4ab,#70bda0,#21b59c',
    '0deg,#efbdda,#a4d1fe',
    '270deg,#fdece4,#d9e9d2,#e2e4b9',
    '90deg,#fecaab,#f37fb6,#7678c6',
    '180deg,#8773e8,#cc95e1',
  ]
  const random = Math.floor(Math.random() * colors.length)
  return `linear-gradient(${colors[random]})`
}
