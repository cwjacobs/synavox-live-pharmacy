
export class MedicinePanelController {

    medicineName: string;

    selectCategory(e: JQuery.Event): void {
        e.preventDefault();

        let targetElement: Element | undefined = e.toElement;
        if (targetElement) {
            let medicineCategory: string | null = targetElement.textContent;
            if (medicineCategory) {
                $('#selected-medicine-info').text(medicineCategory);
            }
        }
    };

    selectMedicine(e: JQuery.Event): void {
        e.preventDefault();

        let targetElement: Element | undefined = e.toElement;
        if (targetElement) {
            this.medicineName = targetElement.id;
        }

        let self: any = this;

        // Using then (not as clear to me)
        $('.selected-medicine-name').fadeOut(500)
            .promise()

            .progress(function (data) {
                alert('progress');
            });

        // Using done, fail and progress (much more clear to me)
        $('.selected-medicine-name').fadeOut(500)
            .promise()

            .done(function (data) {
                $('.selected-medicine-name').text(self.medicineName);
                $('.selected-medicine-name').fadeIn(500);
            })

            .fail(function (data) {
                alert('fail');
            })

            .progress(function (data) {
                alert('progress');
            });
    };
}