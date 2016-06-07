/**
 * Created by João Marcos BR on 18/05/2016.
 */
angular.module("codetutor").controller("videoController", function ($scope, $location, Upload, videoAPIService) {
    $scope.postVideo = function (video,thumb, dados) {
        var thumb = $scope.thumb;
        var files = [video, thumb];

        videoAPIService.postVideo(files,dados)
            .success(function (data) {
                alert("Video postado com sucesso");
            })
            .error(function (err) {
                alert(err.msg);
            })
    };

    $scope.cancelar = function () {
        delete $scope.file;
    };

    $scope.getThumb = function(){
        var videoTag = document.getElementById('video');
        var canvas = document.createElement("canvas");
        canvas.width = videoTag.videoWidth - (videoTag.videoWidth * 0.5);
        canvas.height = videoTag.videoHeight - (videoTag.videoHeight * 0.5);
        canvas.getContext('2d').drawImage(videoTag, 0, 0, canvas.width, canvas.height);

        var dataURL = canvas.toDataURL("image/png");
        var blob = dataURLtoBlob(dataURL);
        $scope.thumb = new File([blob], 'thumb.png');
        $scope.thumbUrl = dataURL;
        return dataURL;
    };

    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: "image/png"});
    };
});
