function defangingIp(ip) {
    let regex = /^[0-9]*\.?[0-9]*\.?[0-9]*\.?[0-9]*$/gm
    let test = regex.test(ip);
    if (test) {
        let result = ip.replace(/\./g, "[.]");
        return result
    }
    return 'Not a valid ip';
}

console.log(defangingIp('1.1.1.1'));
console.log(defangingIp('255.100.50.0'));