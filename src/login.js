function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    const notif = document.getElementById('notif');
    const status = getQueryParam('status');

    if (!status) return;

    notif.style.textAlign = "center";
    notif.style.marginBottom = "10px";
    notif.style.animation = "glow 2s infinite alternate";

    if (status === "register_success") {
        notif.textContent = "Registrasi berhasil! Silakan login.";
        notif.style.color = "green";

    } else if (status === "username_taken") {
        notif.textContent = "Username sudah digunakan.";
        notif.style.color = "red";

    } else if (status === "login_failed") {
        notif.textContent = "Login gagal! Username atau password salah.";
        notif.style.color = "red";
    }
};