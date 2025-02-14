<template>
    <div class="maxContainer sm:w-[80%] w-full h-full xl:pt-8 pt-3 flex flex-col justify-between xl:space-y-12 space-y-10">
        <div class="lg:max-w-[600px] sm:w-full w-[90%] mx-auto flex flex-col justify-center items-center sm:gap-6 gap-4">
            <h2 class="md:text-3xl sm:text-2xl text-xl font-semibold">Romans 8:28 (NIV)</h2>
            <p class="lg:text-2xl sm:text-xl text-lg text-center leading-loose">
                And we know that in all things God work for the good of those who love him, who have been called according to his purpose.
            </p>
        </div>
        <div class="sm:max-w-[600px] w-full mx-auto p-6 flex flex-col justify-center items-center gap-3 sm:rounded-xl bg-white">
            <div class="p-3 rounded-full bg-gray-100">
                <img 
                    src="../../assets/icons/audio_waves.png"
                    class="w-fit h-6"
                />
    
            </div>
            <div class="max-w-[250px] mx-auto space-y-4">
                <p class="text-lg text-center font-medium">
                    Transcribing and detecting Bible quotations in real time
                </p>
                <div class="w-full py-3 flex justify-center items-center gap-4 text-red-500 rounded-full bg-red-100">
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
        name: 'home',
    }
</script>

<style lang="scss" scoped>

</style>