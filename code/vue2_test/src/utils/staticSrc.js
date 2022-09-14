export const serverStaticPath = (p) => {
    let ans = window.location.origin + ":8080/static";
    if (p[0] !== '/') {
        ans += '/' + p;
    } else {
        ans += p;
    }
    return ans;
}

export const serverLink = (p) => {
    let ans = window.location.origin + ":8080";
    if (p[0] !== '/') {
        ans += '/' + p;
    } else {
        ans += p;
    }
    return ans;
}
