const translation = {
  steps: {
    header: {
      creation: 'Bilgi Oluştur',
      update: 'Veri ekle',
    },
    one: 'Veri kaynağı seçin',
    two: 'Metin Ön İşleme ve Temizleme',
    three: 'Çalıştır ve Bitir',
  },
  error: {
    unavailable: 'Bu Bilgi kullanılamıyor',
  },
  firecrawl: {
    configFirecrawl: '🔥Firecrawl\'ı Yapılandır',
    apiKeyPlaceholder: 'firecrawl.dev\'den API anahtarı',
    getApiKeyLinkText: 'API anahtarınızı firecrawl.dev\'den alın',
  },
  stepOne: {
    filePreview: 'Dosya Önizleme',
    pagePreview: 'Sayfa Önizleme',
    dataSourceType: {
      file: 'Dosyadan içe aktar',
      notion: 'Notion\'dan senkronize et',
      web: 'Web sitesinden senkronize et',
    },
    uploader: {
      title: 'Dosya yükle',
      button: 'Dosyayı sürükleyip bırakın veya',
      browse: 'Göz atın',
      tip: 'Destekler {{supportTypes}}. Her biri en fazla {{size}}MB.',
      validation: {
        typeError: 'Dosya tipi desteklenmiyor',
        size: 'Dosya çok büyük. Maksimum {{size}} MB',
        count: 'Birden fazla dosya desteklenmiyor',
        filesNumber: 'Toplu yükleme sınırına ulaştınız, {{filesNumber}} dosya.',
      },
      cancel: 'İptal',
      change: 'Değiştir',
      failed: 'Yükleme başarısız',
    },
    notionSyncTitle: 'Notion bağlı değil',
    notionSyncTip: 'Notion ile senkronize etmek için önce Notion\'a bağlanılmalıdır.',
    connect: 'Bağlanmaya git',
    button: 'Sonraki',
    emptyDatasetCreation: 'Boş bir bilgi oluşturmak istiyorum',
    modal: {
      title: 'Boş bir bilgi oluştur',
      tip: 'Boş bir bilgi hiçbir belge içermeyecektir ve dilediğiniz zaman belge yükleyebilirsiniz.',
      input: 'Bilgi adı',
      placeholder: 'Lütfen girin',
      nameNotEmpty: 'Ad boş olamaz',
      nameLengthInvaild: 'Ad 1 ile 40 karakter arasında olmalıdır',
      cancelButton: 'İptal',
      confirmButton: 'Oluştur',
      failed: 'Oluşturma başarısız',
    },
    website: {
      fireCrawlNotConfigured: 'Firecrawl yapılandırılmamış',
      fireCrawlNotConfiguredDescription: 'Firecrawl\'ı kullanmak için API anahtarı ile yapılandırın.',
      configure: 'Yapılandır',
      run: 'Çalıştır',
      firecrawlTitle: '🔥Firecrawl ile web içeriğini çıkarın',
      firecrawlDoc: 'Firecrawl dokümanları',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      options: 'Seçenekler',
      crawlSubPage: 'Alt sayfaları tarayın',
      limit: 'Sınır',
      maxDepth: 'Maksimum derinlik',
      excludePaths: 'Yolları hariç tut',
      includeOnlyPaths: 'Yalnızca yolları dahil et',
      extractOnlyMainContent: 'Sadece ana içeriği çıkar (başlıklar, navigasyonlar, altbilgiler vb. yok)',
      exceptionErrorTitle: 'Firecrawl işi çalıştırılırken bir istisna meydana geldi:',
      unknownError: 'Bilinmeyen hata',
      totalPageScraped: 'Toplam kazınan sayfa:',
      selectAll: 'Hepsini Seç',
      resetAll: 'Hepsini Sıfırla',
      scrapTimeInfo: 'Toplam {{total}} sayfa {{time}}s içinde kazındı',
      preview: 'Önizleme',
      maxDepthTooltip: 'Girilen URL\'ye göre tarama için maksimum derinlik. Derinlik 0 sadece girilen url sayfasını kazır, derinlik 1 url ve girilen URL + bir / \'dan sonraki her şeyi kazır ve böyle devam eder.',
    },
  },
  stepTwo: {
    segmentation: 'Parçalanma ayarları',
    auto: 'Otomatik',
    autoDescription: 'Parçalanma ve ön işleme kurallarını otomatik olarak ayarlayın. Bilgisiz kullanıcıların bunu seçmesi önerilir.',
    custom: 'Özel',
    customDescription: 'Parçalanma kurallarını, parçalanma uzunluğunu ve ön işleme kurallarını kişiselleştirin.',
    separator: 'Parçalanma belirleyicisi',
    separatorPlaceholder: 'Örneğin, yeni satır (\\\\n) veya özel ayırıcı (örn. "***")',
    maxLength: 'Maksimum parça uzunluğu',
    overlap: 'Parça örtüşmesi',
    overlapTip: 'Parça örtüşmesini ayarlamak, aralarındaki anlamsal bağı koruyabilir, geri alım etkisini artırır. Maksimum parça boyutunun %10-%25\'ini ayarlamanız önerilir.',
    overlapCheck: 'parça örtüşmesi maksimum parça uzunluğundan büyük olmamalıdır',
    rules: 'Metin ön işleme kuralları',
    removeExtraSpaces: 'Art arda gelen boşlukları, yeni satırları ve sekmeleri değiştirin',
    removeUrlEmails: 'Tüm URL\'leri ve e-posta adreslerini silin',
    removeStopwords: '"a", "an", "the" gibi durdurma kelimelerini silin',
    preview: 'Onayla ve Önizleme',
    reset: 'Sıfırla',
    indexMode: 'Dizin modu',
    qualified: 'Yüksek Kalite',
    recommend: 'Önerilen',
    qualifiedTip: 'Kullanıcılar sorguladığında daha yüksek doğruluk sağlamak için varsayılan sistem yerleştirme arayüzünü çağırır.',
    warning: 'Lütfen önce model sağlayıcı API anahtarını ayarlayın.',
    click: 'Ayarlara git',
    economical: 'Ekonomik',
    economicalTip: 'Doğruluğu azaltmak için çevrimdışı vektör motorlarını, anahtar kelime dizinlerini vb. kullanın, token harcamadan',
    QATitle: 'Soru ve Yanıt formatında parçalama',
    QATip: 'Bu seçeneği etkinleştirmek daha fazla token tüketecektir',
    QALanguage: 'Kullanarak parçalara ayır',
    estimateCost: 'Tahmin',
    estimateSegment: 'Tahmini parçalar',
    segmentCount: 'parçalar',
    calculating: 'Hesaplanıyor...',
    fileSource: 'Belgeleri ön işleme',
    notionSource: 'Sayfaları ön işleme',
    websiteSource: 'Web sitesini ön işleme',
    other: 've diğer',
    fileUnit: ' dosyalar',
    notionUnit: ' sayfalar',
    webpageUnit: ' sayfalar',
    previousStep: 'Önceki adım',
    nextStep: 'Kaydet ve İşle',
    save: 'Kaydet ve İşle',
    cancel: 'İptal',
    sideTipTitle: 'Neden parçalanma ve ön işleme?',
    sideTipP1: 'Metin verileri işlerken, parçalama ve temizleme iki önemli ön işleme adımıdır.',
    sideTipP2: 'Parçalanma, uzun metinleri paragraflara böler, böylece modeller daha iyi anlayabilir. Bu, model sonuçlarının kalitesini ve alaka düzeyini artırır.',
    sideTipP3: 'Temizleme, gereksiz karakterleri ve formatları kaldırarak Bilginin daha temiz ve daha kolay analiz edilmesini sağlar.',
    sideTipP4: 'Uygun parçalama ve temizleme, model performansını iyileştirir, daha doğru ve değerli sonuçlar sağlar.',
    previewTitle: 'Önizleme',
    previewTitleButton: 'Önizleme',
    previewButton: 'Q&A formatına geçiş',
    previewSwitchTipStart: 'Geçerli parça önizlemesi metin formatındadır, soru ve yanıt formatına geçiş ek tüketir',
    previewSwitchTipEnd: 'token',
    characters: 'karakterler',
    indexSettingTip: 'Dizin yöntemini değiştirmek için, lütfen',
    retrievalSettingTip: 'Dizin yöntemini değiştirmek için, lütfen',
    datasetSettingLink: 'Bilgi ayarlarına gidin.',
  },
  stepThree: {
    creationTitle: '🎉 Bilgi oluşturuldu',
    creationContent: 'Bilginin adını otomatik olarak belirledik, dilediğiniz zaman değiştirebilirsiniz',
    label: 'Bilgi adı',
    additionTitle: '🎉 Belge yüklendi',
    additionP1: 'Belge Bilgi\'ye yüklendi',
    additionP2: ', bilgi listesinden bulabilirsiniz.',
    stop: 'İşlemeyi durdur',
    resume: 'İşlemeye devam et',
    navTo: 'Belgeye git',
    sideTipTitle: 'Sırada ne var',
    sideTipContent: 'Belge dizine ekleme işlemi bittikten sonra Bilgi, bağlam olarak uygulamaya entegre edilebilir. Prompt düzenleme sayfasında bağlam ayarlarını bulabilirsiniz. Ayrıca bağımsız bir ChatGPT dizinleme eklentisi olarak yayınlamak için de oluşturabilirsiniz.',
    modelTitle: 'Yerleştirmeyi durdurmak istediğinize emin misiniz?',
    modelContent: 'İşlemeye daha sonra devam etmeniz gerekirse, kaldığınız yerden devam edeceksiniz.',
    modelButtonConfirm: 'Onayla',
    modelButtonCancel: 'İptal',
  },
}

export default translation
