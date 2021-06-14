function stoganyfy(input) {
   return input.split(/s/).map(word => word.replace('е', 'і').replace('ё', 'е')).join(' ');
}
