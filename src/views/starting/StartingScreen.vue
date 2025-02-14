<template>
    <div class="maxContainer sm:w-[80%] w-full h-full xl:pt-8 pt-3 flex flex-col justify-end xl:space-y-12 space-y-10">
        <div class="sm:max-w-[600px] w-full mx-auto p-6 flex flex-col justify-center items-center gap-3 sm:rounded-xl bg-white">
            <div class="p-3 rounded-full bg-gray-200">
                <div class="p-0.5 rounded-full bg-black">
                    <div class="p-1 bg-white rounded-full">
                        <div class="p-1 bg-black rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="max-w-[250px] mx-auto space-y-4">
                <p class="text-lg text-center font-medium">
                    Transcribing and detecting Bible quotations in real time
                </p>

                <!-- Start Listening Button -->
                <div 
                    v-if="!isRecording"
                    class="w-full py-3 flex justify-center items-center gap-4 text-white rounded-full cursor-pointer transition bg-black hover:bg-gray-800 active:scale-95"
                    @click="startRecording"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                        <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                    </svg>
                    <span>Start Listening</span>
                </div>

                <!-- Stop Listening Button (Only appears when recording) -->
                <div 
                    v-if="isRecording"
                    class="w-full py-3 flex justify-center items-center gap-4 text-red-500 rounded-full bg-red-100 cursor-pointer transition hover:bg-red-200 active:scale-95"
                    @click="stopRecording"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                        <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                    </svg>
                    <span>Stop Listening</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'starting',
    data() {
        return {
            isRecording: false,
            mediaRecorder: null,
            audioChunks: []
        };
    },
    methods: {
        async startRecording() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.mediaRecorder = new MediaRecorder(stream);
                this.audioChunks = [];

                this.mediaRecorder.ondataavailable = event => {
                    if (event.data.size > 0) {
                        this.audioChunks.push(event.data);
                    }
                };

                this.mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    console.log("Recording saved:", audioUrl);
                    // You can upload or play the audio here
                };

                this.mediaRecorder.start();
                this.isRecording = true;
            } catch (error) {
                console.error("Error accessing microphone:", error);
            }
        },
        stopRecording() {
            if (this.mediaRecorder && this.isRecording) {
                this.mediaRecorder.stop();
                this.isRecording = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
/* Optional Styling */
</style>
