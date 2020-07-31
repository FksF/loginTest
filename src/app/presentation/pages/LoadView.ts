export interface LoadView {
    showLoading();
    hideLoading();
    showError(error: Array<string>);
}