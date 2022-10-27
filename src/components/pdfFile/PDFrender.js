import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    courseTitle: {
        fontSize: 25,
        fontWeight: 600,
        margin: 20
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 500,
        margin: 10,
        color: "gray"
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20,
        textAlign: "center",
        fontWeight: 600,
        backgroundColor: "#3498db",
        padding: 15,
        borderRadius: 10
    },
});

const PDFrender = ({ courseD }) => {
    const { img, teacher, description, title, price, time, course } = courseD;
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>
                    {course}
                </Text>
                <Image src={img} style={styles.image} />
                <Text style={styles.courseTitle}>{title}</Text>
                <Text style={styles.subTitle}>Toutor: {teacher}</Text>
                <Text style={styles.subTitle}>Course Duration: {time}</Text>
                <Text style={styles.subTitle}>Price: {price}</Text>
                <Text style={styles.text}>
                    Description: {description}
                </Text>
            </Page>
        </Document>
    );
};

export default PDFrender;